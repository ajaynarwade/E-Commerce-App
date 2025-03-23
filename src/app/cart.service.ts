// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// interface CartItem {
//   name: string;
//   price: number;
//   image: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartItems = new BehaviorSubject<CartItem[]>(this.loadCartItems());
//   cartItems$ = this.cartItems.asObservable();

//   private loadCartItems(): CartItem[] {
//     if (typeof window !== 'undefined' && localStorage) {
//       const items = localStorage.getItem('cartItems');
//       return items ? JSON.parse(items) : [];
//     }
//     return [];
//   }

//   private saveCartItems(items: CartItem[]): void {
//     if (typeof window !== 'undefined' && localStorage) {
//       localStorage.setItem('cartItems', JSON.stringify(items));
//     }
//   }

//   getCartItems() {
//     return this.cartItems$;
//   }

//   addToCart(item: CartItem) {
//     const items = this.cartItems.getValue();
//     const updatedItems = [...items, item];
//     this.cartItems.next(updatedItems);
//     this.saveCartItems(updatedItems);
//   }

//   removeFromCart(item: CartItem) {
//     const items = this.cartItems.getValue().filter(cartItem => cartItem.name !== item.name);
//     this.cartItems.next(items);
//     this.saveCartItems(items);
//   }

//   // New method to clear all items from the cart
//   clearCart() {
//     this.cartItems.next([]); // Clear the BehaviorSubject
//     this.saveCartItems([]);  // Clear localStorage
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number; // Ensure quantity is required
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(this.loadCartItems());
  cartItems$ = this.cartItems.asObservable();

  private loadCartItems(): CartItem[] {
    if (typeof window !== 'undefined' && localStorage) {
      const items = localStorage.getItem('cartItems');
      return items ? JSON.parse(items) : [];
    }
    return [];
  }

  private saveCartItems(items: CartItem[]): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  }

  getCartItems() {
    return this.cartItems$;
  }

  addToCart(item: CartItem) {
    const items = this.cartItems.getValue();
    const existingItem = items.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if item exists
    } else {
      items.push(item); // Add new item if it doesn't exist
    }

    this.cartItems.next(items);
    this.saveCartItems(items);
  }

  removeFromCart(item: CartItem) {
    const items = this.cartItems.getValue().filter(cartItem => cartItem.name !== item.name);
    this.cartItems.next(items);
    this.saveCartItems(items);
  }

  clearCart() {
    this.cartItems.next([]); // Clear the cart
    this.saveCartItems([]);  // Clear localStorage
  }

  // New method to update quantity of an item in the cart
  updateCartItemQuantity(item: CartItem, quantity: number) {
    const items = this.cartItems.getValue();
    const existingItem = items.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity = quantity; // Update the quantity
    }

    this.cartItems.next(items);
    this.saveCartItems(items);
  }

  // Calculate the delivery charge based on total cart price
  calculateDeliveryCharge(): number {
    const total = this.cartItems.getValue().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    // Example: Delivery charge of ₹50 for orders below ₹500
    return total < 500 ? 50 : 0; // Free delivery for orders over ₹500
  }

  // Calculate the total price including the delivery charge
  calculateTotalWithDelivery(): number {
    const total = this.cartItems.getValue().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total + this.calculateDeliveryCharge();
  }
}