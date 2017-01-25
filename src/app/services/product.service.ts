import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { UpperCasePipe } from '@angular/common';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

  products: Product[];

  constructor(public upper: UpperCasePipe, private http: Http) {

    this.products = [];

  }

  getProducts(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/rest/products')
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

  findProductByTitle(productTitle: string): Product {
  	let matchingProduct = this.products.find((product) => {
  		return product.title === productTitle;
  	});
  	return matchingProduct;
  }

  isTheLast(productTitle: string): boolean {
  	let matchingProduct = this.findProductByTitle(productTitle);
  	return matchingProduct.stock === 1;
  }

  isAvailable(productTitle: string): boolean {
  	let matchingProduct = this.findProductByTitle(productTitle);
  	return matchingProduct.stock > 0;
  }

  decreaseStock(productTitle: string): void {
  	let matchingProduct = this.findProductByTitle(productTitle);
  	matchingProduct.stock --;
  }

}
