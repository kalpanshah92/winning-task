import { ProductDescComponent } from './product-desc/product-desc.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'winning-task';
  display = true;

  // to remove opencart button from application
  openCart() {
    this.display = false;
  }
}
