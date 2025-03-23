import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featuredcategories',
  templateUrl: './featuredcategories.component.html',
  styleUrls: ['./featuredcategories.component.scss']
})
export class FeaturedcategoriesComponent {
  categories = [
    { name: 'Amla', icon: './assets/Amla.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'kale', icon: './assets/Kale.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'carrot', icon: './assets/carrot.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Bhindi', icon: './assets/bhindi.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Amla', icon: './assets/Amla.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'kale', icon: './assets/Kale.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'carrot', icon: './assets/carrot.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Bhindi', icon: './assets/Bhindi.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Amla', icon: './assets/Amla.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'kale', icon: './assets/Kale.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'carrot', icon: './assets/carrot.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Bhindi', icon: './assets/bhindi.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
   
  ];
  
}
