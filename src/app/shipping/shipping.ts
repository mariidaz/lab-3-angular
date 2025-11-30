import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css'
})
export class Shipping implements OnInit {
  shippingCosts!: Observable<{type: string, price: number}[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}