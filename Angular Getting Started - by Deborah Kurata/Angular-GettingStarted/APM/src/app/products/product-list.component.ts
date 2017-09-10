import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './product.service';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 60;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  products: IProduct[] = [];
  filteredProducts: IProduct[];
  _listFilter: string;

  constructor(private _productService: ProductService) {
    
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
          this.products = products,
          this.filteredProducts = this.products;
        }, error => this.errorMessage = <any>error);
  }

}
