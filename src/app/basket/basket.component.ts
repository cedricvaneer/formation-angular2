import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  products: Product[];

  constructor(private customerService: CustomerService) {
  }

  getBasket() {
    this.customerService.getBasket().subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.getBasket();
  }

}
