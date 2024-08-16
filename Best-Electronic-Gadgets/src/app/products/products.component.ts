import { Component } from '@angular/core';
import { IProduct } from '../_models/Product.Model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[] = [];
  visibilty : boolean = true;
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe((responseData)=>
    {
      this.products = responseData;
      this.isLoading = false;
    });
  }
}
