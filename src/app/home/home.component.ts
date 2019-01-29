import { Component, OnInit, DoCheck } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { CustomerModule } from '../customer/customer.module';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  ngDoCheck() {
    this.getUsers();
  }

  public cust: CustomerModule;
  public aisleMod: AisleModModule;
  constructor(private _pnpService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.getAisleData();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  getUsers() {
    this.cust = this._pnpService.getUser();
  }

  getAisleData(){
    this._pnpService.getAisle()
      .subscribe((resAisleData) => this.aisleMod  = JSON.parse(resAisleData["_body"]));
  }

  setAisle(aisle1: AisleModModule){
    this._pnpService.setAaisle(aisle1);
    this.router.navigate(['/app-product']);
  }
}