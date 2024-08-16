import { Component, Input } from '@angular/core';
import { IProduct } from '../../_models/Product.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: IProduct;

  constructor(private router: Router){}

  onDetails() : void
  {
    this.router.navigate(['product', this.product.id]);
  }
}
