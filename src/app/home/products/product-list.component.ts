import { Component } from '@angular/core';
import { IProduct, Product } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.filteredProducts ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    pageTitle: string = 'Product-List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage:string;

    constructor(private _productService: ProductService) {
        this.listFilter = 'cart';
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products =>{
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + message;
    }
}

