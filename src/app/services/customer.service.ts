import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerService {

  products: Product[];

  constructor(private http: Http) {
    this.products = [];
  }

  addProduct(product: Product): Observable<Response> {
  	// this.products.push(product);
    return this.http.post('http://localhost:8080/rest/basket', product)
    .do(products => this.products.push(product));
  	// return this.products;
  }

  getTotal(): number {
    return this.products.reduce((total, product) => (total += product.price ), 0);
  }

  getBasket(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/rest/basket')
    .map(result => result.json())
    .map(productList => {
      return productList.map(product => {
        product.title = product.title.toUpperCase();
        return new Product(
          product.title,
          product.description,
          product.photo,
          product.price,
          product.stock
        );
      });
    })
    .do(products => this.products = products);
  }
}
