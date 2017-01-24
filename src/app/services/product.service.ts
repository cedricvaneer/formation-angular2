import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  products: Product[];

  constructor() {
  	this.products = [];
  	this.products.push(new Product("Product 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 10, 0));
  	this.products.push(new Product("Product 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 20, 1));
  	this.products.push(new Product("Product 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 30, 2));
  	this.products.push(new Product("Product 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 40, 3));
  }

  getProducts(): Product[]{
  	return this.products;
  }

  findProductByTitle(productTitle: string): Product{
  	let matchingProduct = this.products.find((product) => {
  		return product.title === productTitle;
  	});
  	return matchingProduct;
  }

  isTheLast(productTitle: string): boolean{
  	let matchingProduct = this.findProductByTitle(productTitle);
  	return matchingProduct.stock === 1;
  }

  isAvailable(productTitle: string): boolean{
  	let matchingProduct = this.findProductByTitle(productTitle);
  	return matchingProduct.stock > 0;
  }

  decreaseStock(productTitle: string): void{
  	let matchingProduct = this.findProductByTitle(productTitle);
  	matchingProduct.stock --;
  }

}
