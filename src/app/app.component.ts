import { Component } from '@angular/core';
import { ProductService } from './home/products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='containter-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-bar'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
      providers: [ProductService]
})

export class AppComponent {
  pageTitle: string = "Acme Product Manager";
}