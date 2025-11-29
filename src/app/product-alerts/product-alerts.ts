import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-alerts.html',
  styleUrl: './product-alerts.css',
})
export class ProductAlerts {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
