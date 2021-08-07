import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { title: 'this is a title', image: '/assets/images/image0.jpeg' },
    { title: 'this is a title', image: '/assets/images/image1.jpeg' },
    { title: 'this is a title', image: '/assets/images/image2.jpeg' },
    { title: 'this is a title', image: '/assets/images/image3.jpeg' },
    { title: 'this is a title', image: '/assets/images/image4.jpeg' },
    { title: 'this is a title', image: '/assets/images/image5.jpeg' },
    { title: 'this is a title', image: '/assets/images/image6.jpeg' },
    { title: 'this is a title', image: '/assets/images/image7.jpeg' },
    { title: 'this is a title', image: '/assets/images/image8.jpeg' },
    { title: 'this is a title', image: '/assets/images/image9.jpeg' },
    { title: 'this is a title', image: '/assets/images/image10.jpeg' },
  ]
  selectedImageIndex = -1;
  showFlag = false;

  constructor() { }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  openImage(index: number) {
    this.showFlag = true;
    this.selectedImageIndex = index;
  }

}
