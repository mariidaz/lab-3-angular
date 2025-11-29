import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http'; // Для шага с доставкой

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}