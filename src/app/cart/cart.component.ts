import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust path as necessary

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  deliveryCharge: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
      this.calculateDeliveryCharge();
    });
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  calculateDeliveryCharge() {
    this.deliveryCharge = this.cartService.calculateDeliveryCharge();
  }

  calculateTotalWithDelivery() {
    return this.cartService.calculateTotalWithDelivery();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.deliveryCharge = 0;
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
    this.calculateTotal();
    this.calculateDeliveryCharge();
  }

  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateCartItemQuantity(item, quantity);
      this.calculateTotal();
      this.calculateDeliveryCharge();
    }
  }

  proceedToCheckout() {
    alert('Proceeding to checkout!');
    // You can navigate to a checkout page or process the order here
  }
}
