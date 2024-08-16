import { Component } from '@angular/core';
import { IProduct } from '../../_models/Product.Model';
import { ProductService } from '../../_services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css',
})
export class ProductUpsertComponent {
  id: string = '';
  isEditMode: boolean = false;

 product: IProduct = { 
  id: '',
  name: '',
  brand: '',
  price: '',
  imageUrl: '',
  manufacturedYear: '' 
};

  constructor
  (
    private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    });

    if (this.id) {
      this.productService.getProductById(this.id).subscribe((responseData: IProduct) => {
        this.product = responseData;
      })
      this.isEditMode = true;
    }
  }

  onsubmit(): void {
    if(!this.isEditMode){
      this.product.id = Math.random().toString();
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
    else{
      this.productService.updateProduct(this.product).subscribe(()=>
      {
        this.router.navigateByUrl(`/product/${this.id}`);
      });
    }
  }

  onBack()
  {
    if(this.isEditMode)
    {
      this.router.navigateByUrl(`/product/${this.id}`);
    }
    else{
      this.router.navigateByUrl(`/`);
    }
   
  }
}
