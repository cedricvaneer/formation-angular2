import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService, CustomerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: number = 0;
  products: Product[];

  constructor(public productService: ProductService, public customerService: CustomerService) {
    productService.getProducts().subscribe(products => this.products = products);
  }

  priceUpdate(price) {
    this.total += price;
  }

  isAvailable(productTitle: string) {
    return this.productService.isAvailable(productTitle);
  }

  getTotal() {
    return this.customerService.getTotal();
  }
}
