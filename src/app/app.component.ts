import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  showFullContent = true; // Toggle for showing/hiding full content
  currentRoute = '';
  featuredProducts = [
    { name: 'Handmade Printed Flowerpots', price: 200.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDT6h5zyeIvR8wAXrFpF9UbwdgyObedm2b0A&s' },
    { name: 'Plane & Salted Fasting Potato', price: 60.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOIE0lcN64gH7lkJYILNVH9WvmdFMIPm7Nw&s' },
    { name: 'Handloom saree for womens', price: 499.00, image: 'https://www.indianvillez.com/cdn/shop/collections/1896eece956e38f802f68e71d23febc0.jpg?v=1695821563' },
    { name: 'Handmade Pink flower jewellery ', price: 399, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprahYheLi_PNUIvJWjLzKL3D1hf8WiDb6zg&s' },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;

        // Logic to show/hide content based on route
        if (
          this.currentRoute === '/cart' ||
          this.currentRoute === '/products' ||
          this.currentRoute === '/rentals' ||
          this.currentRoute === '/login' ||
          this.currentRoute === '/food'
        ) {
          this.showFullContent = false; // Hide full content for specific screens
        } 
        if(this.currentRoute == '/'){
          this.showFullContent = true;
        }
        else {
          this.showFullContent = false; // Show full content for other screens
        }
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
        // Scroll to top after navigation
        // window.scrollTo(0, 0);
      }
    });
  }
}
