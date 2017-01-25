import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Product } from '../model/product';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Product[];
  customer: Customer;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  getBasket() {
    this.customerService.getBasket().subscribe(products => this.basket = products);
  }

  ngOnInit() {
    this.getBasket();
    this.customer = new Customer('', '', '');
  }

  checkOut() {
    this.customerService.checkOut(this.customer).subscribe(() => this.router.navigate(['']));
  }

}
