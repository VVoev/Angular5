import { Component } from '@angular/core';
import { ProductService } from './home/products/product.service';

@Component({
  selector: 'pm-root',
  template: `<div>
                <h1>{{pageTitle}}</h1>
                <div>Some Component will be here maybe </div>
                <pm-products></pm-products>
            </div>`,
      providers: [ProductService]
})

export class AppComponent {
  pageTitle: string = "Acme Product Manager";
}