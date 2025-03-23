import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { LoginComponent } from './pages/login/login.component';
import { FoodComponent } from './food/food.component';
import { CartComponent } from './cart/cart.component';
import { BannerComponent } from './components/banner/banner.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: BannerComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'food', component: FoodComponent },
  { path: 'cart', component: CartComponent },
 
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
