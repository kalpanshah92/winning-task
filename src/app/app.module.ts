import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { QuantityComponent } from './quantity/quantity.component';
import { BaseAppComponent } from './base-app/base-app.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescComponent,
    QuantityComponent,
    BaseAppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'baseapp',
         component: BaseAppComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      }

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
