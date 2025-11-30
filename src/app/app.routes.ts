import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';
import { Shipping } from './shipping/shipping';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { News } from './news/news';
import { authGuard } from './auth.guard'; // Наш захисник

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'products/:productId', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'shipping', component: Shipping },
  { path: 'login', component: Login },
  { path: 'news', component: News },
  { 
    path: 'profile', 
    component: Profile, 
    canActivate: [authGuard] 
  },
];