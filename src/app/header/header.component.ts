import { Component, OnInit, DoCheck } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { Router } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public aisleMod: AisleModModule;
  public itms: ItemsModModule;
  numItmz:number = 0;

  public cust: CustomerModule;
  constructor(public _headerService: PicknpayService, private router: Router) { }

  ngDoCheck() {
    this.numItmz = this._headerService.getCartI();
    if (this.numItmz == null) {
      this.numItmz = 0;
    } 
    this.cust = this._headerService.getUser();
  }

  ngOnInit() {
    this.getAisleData();
    this.getfrmItms();
  }

  getAisleData(){
    this._headerService.getAisle()
      .subscribe((resAisleData) => this.aisleMod = JSON.parse(resAisleData["_body"]));
  }

  getfrmItms() {
    this._headerService.getTempCart()
    .subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }

  setAisle(aisle1: AisleModModule){
    this._headerService.setAaisle(aisle1);
    this.router.navigate(['/app-product']);
  }

  signOut() {
    this._headerService.endUser();
    this.router.navigate(['/app-home']);
  }

  delivery() {
    if (this.cust) {
      if (this.numItmz > 0) {
        this.router.navigate(['/app-delivery']);
      } else {
        this.router.navigate(['/app-not-found']);
      }
    } else {
      this.router.navigate(['/app-login']);
    }
  }
}
