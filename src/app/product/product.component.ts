import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addToBasket = new EventEmitter<number>();

	constructor(){
	}

  ngOnInit() {
  }

  addToBasketHandler(){
  	this.addToBasket.emit(this.product.price);
  	this.product.stock -= 1;
  }

}
