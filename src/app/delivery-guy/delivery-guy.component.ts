import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { DeliveryModModule } from '../delivery-mod/delivery-mod.module';
import { CartModModule } from '../cart-mod/cart-mod.module';
import { CustomerModule } from '../customer/customer.module';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-guy',
  templateUrl: './delivery-guy.component.html',
  styleUrls: ['./delivery-guy.component.css']
})
export class DeliveryGuyComponent implements OnInit {

  public delivery: DeliveryModModule;
  public cart: CartModModule;
  public customer: CustomerModule;
  public item: ItemsModModule;
  public delvGuy: CustomerModule;

  constructor(private _deliveryGuyService: PicknpayService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
    this.getCart();
    this.getItems();
    this.getUsers();

    this.delvGuy = this._deliveryGuyService.getUser();

    if (this.delvGuy != null) {
      if ( this.delvGuy.email != "delivery123Guy@gmails.com") {
        this._router.navigate(["/app-not-found"]);
      }
    } else {
      this._router.navigate(["/app-home"]);
    }
  }

  getAll() {
    this._deliveryGuyService.getAllDeliveries()
      .subscribe(res => this.delivery = JSON.parse(res["_body"]));
  }

  getCart() {
    this._deliveryGuyService.getCart()
      .subscribe(res => this.cart = JSON.parse(res["_body"]));
  }

  getUsers() {
    this._deliveryGuyService.getCustomers()
      .subscribe(res => this.customer = JSON.parse(res["_body"]));
  }

  getItems() {
    this._deliveryGuyService.getItems()
      .subscribe(res => this.item = JSON.parse(res["_body"]));
  }

  logout() {
    this._deliveryGuyService.endUser();
    this._router.navigate(["/app-home"]);
  }
}
