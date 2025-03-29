import { Component, HostListener } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartCount: number = 0; // Tracks the number of items in the cart
  menuOpen: boolean = false; // Tracks the state of the hamburger menu

  constructor(private cartService: CartService,
    private router:Router,
  ) {
    // Subscribe to cart updates and update the cart count
    this.cartService.getCartItems().subscribe(items => {
      this.cartCount = items.length;
    });
  }

  // Toggle the visibility of the menu
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  // goToUpload() {
  //   this.Router.navigate(['/upload']);
  // }

  // Close the menu
  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideMenu = (event.target as HTMLElement).closest('.menu-list');
    const clickedHamburger = (event.target as HTMLElement).closest('.togglemenuu');

    if (!clickedInsideMenu && !clickedHamburger) {
      this.menuOpen = false; // Close the menu if clicked outside
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
