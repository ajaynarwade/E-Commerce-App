import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCategories() {
    return [
      { name: 'Milk Products', image: 'assets/milk-products.jpg' },
      { name: 'Sweets', image: 'assets/sweets.jpg' },
      // Add more categories as needed
    ];
  }

  getFeaturedProducts() {
    return [
      { name: 'Fasting Potato Chips', price: 60, image: 'assets/chips.jpg' },
      { name: 'Handloom Saree', price: 499, image: 'assets/saree.jpg' },
      // Add more products as needed
    ];
  }
}
