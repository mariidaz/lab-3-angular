import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'products/:productId', component: ProductDetails },
];
