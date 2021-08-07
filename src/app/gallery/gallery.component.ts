import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { title: 'this is a title', image: '/assets/images/gallery/image0.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image1.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image2.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image3.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image4.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image5.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image6.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image7.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image8.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image9.jpeg' },
    { title: 'this is a title', image: '/assets/images/gallery/image10.jpeg' },
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
