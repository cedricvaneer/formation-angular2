import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product'
import { ProductService, CustomerService } from '../services'
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addToBasket = new EventEmitter<number>();

	constructor(public productService: ProductService, public customerService: CustomerService){
	}

  ngOnInit() {
  }

  addToBasketHandler(){
    this.customerService.addProduct(this.product);
    this.decreaseStock(this.product.title);
  	// this.addToBasket.emit(this.product.price);
  	// this.product.stock -= 1;
  }

  isTheLast(productTitle: string){
    return this.productService.isTheLast(productTitle);
  }

  decreaseStock(productTitle: string){
    return this.productService.decreaseStock(productTitle);
  }
}
