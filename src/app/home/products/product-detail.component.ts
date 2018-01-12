import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  pagetitle: string = 'Product Detail';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
