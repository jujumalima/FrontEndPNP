import { Component, OnInit } from '@angular/core';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { CustomerModule } from '../customer/customer.module';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  public items: ItemsModModule;
  public user: CustomerModule;

  constructor(private _service: PicknpayService, private _router: Router) { }

  ngOnInit() {
    this.getItems();

    this.user = this._service.getUser();

    if (this.user != null) {
      if ( this.user.email != "supplier123Guy@gmails.com") {
        this._router.navigate(["/app-not-found"]);
      }
    } else {
      this._router.navigate(["/app-home"]);
    }
  }

  getItems() {
    this._service.getItems()
    .subscribe(res => {
      this.items = JSON.parse(res["_body"]);
    })
  }

  updateItem(item: ItemsModModule) {
    item.itemsavailable = 50;
    this._service.putItem(item.id, item)
      .subscribe(res => {});
  }

  logout() {
    this._service.endUser();
    this._router.navigate(["/app-home"]);
  }
}
