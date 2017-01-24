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
  	console.log(this.product.price);
  	this.addToBasket.emit(this.product.price);
  }

}
