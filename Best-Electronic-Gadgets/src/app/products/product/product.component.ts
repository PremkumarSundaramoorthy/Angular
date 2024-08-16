import { Component, Input } from '@angular/core';
import { IProduct } from '../../_models/Product.Model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: IProduct;
  id: string = '';
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private productService:ProductService
  ) { };

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if(this.id)
    {
      this.productService.getProductById(this.id).subscribe((responseData: IProduct)=>
      {
        this.product  = responseData;

        this.isLoading = false;
      })
    }
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onEdit()
  {
    this.router.navigate(['product-upsert', this.id]);
  }

  onDelete()
  {
    this.productService.deleteProduct(this.id).subscribe(()=>
    {
      this.router.navigate(['/']);
    });
  }
}
