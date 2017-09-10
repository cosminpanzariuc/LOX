import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './product.service';

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router,  private _productService: ProductService) {}

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get("id");
    this.getProduct(id);
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack():void{
      this._router.navigate(['/products']);
  }
}
