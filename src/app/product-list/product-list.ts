import { Component } from '@angular/core';
import { products } from '../product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductAlerts } from '../product-alerts/product-alerts';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink, ProductAlerts],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
