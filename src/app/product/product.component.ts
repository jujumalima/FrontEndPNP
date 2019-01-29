import { Component, OnInit, DoCheck } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { ProductModModule } from '../product-mod/product-mod.module';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';
import { rootRoute } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit, DoCheck {
  ngDoCheck(){
    this.getAisle();
  }
  
  public prod: ProductModModule;
  public aisle1: AisleModModule;
  constructor(private _productService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getAisle();
    this.getProductData();
  }

  getAisle(){
    this.aisle1 = this._productService.getAaisle();
  }

  getProductData(){
    this._productService.getProductByFk(this.aisle1.id)
      .subscribe((resProductData) => this.prod = JSON.parse(resProductData["_body"]));
  }    

  setProduct(prod: ProductModModule) {
    this._productService.setProduct(prod);
    this.router.navigate(['/app-items']);;
  }
}
