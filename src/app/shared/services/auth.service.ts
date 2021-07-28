import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new Subject<{ isLoggedIn: boolean, userName: string }>();
  private isAuthenticated = false;
  public user: string;
  constructor(private http: HttpClient, private router: Router) {
    this.user = localStorage.getItem('user') || ''
  }

  getAuthStatusListener(): Observable<{ isLoggedIn: boolean, userName: string }> {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUser() {
    return this.user;
  }

  login(userid: string, password: string): Promise<{ message: string; success: boolean; }> {
    return this.http.get<User[]>('/assets/user.json').toPromise().then((users) => {
      const index = users.findIndex(user => {
        return user.userid == userid && user.password == password
      })
      if (index > -1) {
        this.isAuthenticated = true;
        this.user = users[index].username;
        this.authStatusListener.next({ isLoggedIn: true, userName: this.user });
        localStorage.setItem('user', this.user);
        this.router.navigate(["/"]);
        return { success: true, message: 'Logged in successfully' }
      } else {
        this.isAuthenticated = false;
        this.authStatusListener.next({ isLoggedIn: false, userName: '' });
        return { success: false, message: 'Invalid credential' }
      }
    })
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next({ isLoggedIn: false, userName: '' });
    localStorage.removeItem('user')
    this.router.navigate(["/"]);
  }

  checkUserAuth() {
    const user = localStorage.getItem('user');
    console.log('user', user)
    if (user) {
      this.isAuthenticated = true;
      this.user = user;
      this.authStatusListener.next({ isLoggedIn: true, userName: this.user });
    }
  }
}
