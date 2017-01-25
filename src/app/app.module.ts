import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';

import { ProductService, CustomerService } from './services';

import { UpperCasePipe } from '@angular/common';
import { ProductSortPipe } from './pipes/product-sort.pipe';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';

let footerText = 'Copyright Your Website 2016';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: '**', redirectTo: 'home'} // default
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    ProductSortPipe,
    ProductSortPipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,
              CustomerService,
              UpperCasePipe,
              {provide: 'footerText', useValue: footerText},
              {provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
