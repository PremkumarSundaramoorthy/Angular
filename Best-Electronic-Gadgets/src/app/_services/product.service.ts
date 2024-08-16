import { Injectable } from "@angular/core";
import { IProduct } from "../_models/Product.Model";
import { LoggerService } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

const BaseUrl = 'https://angular-37d82-default-rtdb.firebaseio.com';

@Injectable()
export class ProductService {
  productsList: IProduct[] = [];
    
  constructor(private logger: LoggerService, private httpClient: HttpClient) { }

  getProductList() {
    this.logger.logInformation('Product List Fetched');
   return this.httpClient.get(BaseUrl + '/product.json').pipe(map((responseData) =>{
      const products = [];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          const product = {...responseData[key], id:key};
          products.push(product);
        }
      }
      return products;
    }));
  }

  addProduct(product: IProduct): Observable<any> {

    const customProduct = {
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      manufacturedYear: product.manufacturedYear
    };
    this.logger.logInformation('Product Added');
   console.log(customProduct);
    return this.httpClient.post(BaseUrl + '/product.json', customProduct);
  }

  getProductById(id: string)
  {
    return this.httpClient.get(BaseUrl + `/product/${id}.json`).pipe(
      map((responseData)=>{
        return { ...responseData, id};
      }
    ));
  }

  updateProduct(product: IProduct){
    const customProduct = {
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      manufacturedYear: product.manufacturedYear
    };
    
    return this.httpClient.put(BaseUrl + `/product/${product.id}.json`, customProduct);
  }

  deleteProduct(id: string)
  {
    return this.httpClient.delete(BaseUrl + `/product/${id}.json`);
  }
}