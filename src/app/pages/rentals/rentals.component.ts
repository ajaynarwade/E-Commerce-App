import { Component } from '@angular/core';

interface RentalItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss'] // Make sure to create this file
})
export class RentalsComponent {
  categories = [
    { name: 'Ameriacn Kale', icon: './assets/American Kale.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'Argula', icon: './assets/Argula.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'Asparagus', icon: './assets/Asparagus.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Avacado', icon: './assets/Avacado.webp', price: '₹36.00', oldPrice: '₹40.00', discount: '10% off' },
    { name: 'Baby Corn', icon: './assets/Baby Corn.webp', price: '₹64.00', oldPrice: '₹80.00', discount: '20% + 2% bulk off' },
    { name: 'Basil Thai', icon: './assets/Basil Thai.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'Ameriacn Kale', icon: './assets/American Kale.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'Argula', icon: './assets/Argula.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'Asparagus', icon: './assets/Asparagus.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Avacado', icon: './assets/Avacado.webp', price: '₹36.00', oldPrice: '₹40.00', discount: '10% off' },
    { name: 'Baby Corn', icon: './assets/Baby Corn.webp', price: '₹64.00', oldPrice: '₹80.00', discount: '20% + 2% bulk off' },
    { name: 'Basil Thai', icon: './assets/Basil Thai.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'Ameriacn Kale', icon: './assets/American Kale.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
    { name: 'Argula', icon: './assets/Argula.webp', price: '₹103.00', oldPrice: '₹108.00', discount: '5% bulk off' },
    { name: 'Asparagus', icon: './assets/Asparagus.webp', price: '₹99.00', oldPrice: '₹104.00', discount: '5% bulk off' },
    { name: 'Avacado', icon: './assets/Avacado.webp', price: '₹36.00', oldPrice: '₹40.00', discount: '10% off' },
    { name: 'Baby Corn', icon: './assets/Baby Corn.webp', price: '₹64.00', oldPrice: '₹80.00', discount: '20% + 2% bulk off' },
    { name: 'Basil Thai', icon: './assets/Basil Thai.webp', price: '₹88.00', oldPrice: '₹100.00', discount: '10% + 2% bulk off' },
  ];
}
