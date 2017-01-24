import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class CustomerService {

  products: Product[];

  constructor() {
	this.products = [];
  }

  addProduct(product: Product): Product[]{
  	this.products.push(product);
  	return this.products;
  }

  getTotal(): number{
  	return this.products.reduce((total, product) => (total += product.price ), 0);
  }
}
