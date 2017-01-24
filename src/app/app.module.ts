import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';

import { ProductService, CustomerService } from './services';

import { UpperCasePipe } from '@angular/common';
import { ProductSortPipe } from './pipes/product-sort.pipe';

let footerText: string = "Copyright Your Website 2016";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    ProductSortPipe,
    ProductSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService,
              CustomerService,
              UpperCasePipe,
              {provide: 'footerText', useValue: footerText},
              {provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
