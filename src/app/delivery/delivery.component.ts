import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryModModule } from '../delivery-mod/delivery-mod.module';
import { Router } from '@angular/router';
import { _def } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  public delivery: DeliveryModModule;
  add = 0;
  constructor(private _deliveryService: PicknpayService, private router: Router){}

  ngOnInit() {
    this._deliveryService.getAllDeliveries()
        .subscribe((res) => {this.delivery = JSON.parse(res["_body"])});
    this.add;
  }

  addr = new FormGroup({
    id: new FormControl(''),
    address: new FormControl(''),
    name: new FormControl(''),
    nickname: new FormControl(''),
  });

  createAddr() { 
    if (this.addr.value.address != "") {
      this.addr.value.id = Object.keys(this.delivery).length + 1;
      this._deliveryService.setDelivery(this.addr.value);
      this.router.navigate(["/app-order"])
    }
  }

  addAddr() {
    this.add = 1;
  }
}
/*public region: RegionModule;
  public store: StoreModule
  
  selected = 'gauteng';
  selectedId = 3;

  constructor(private _deliveryService: PicknpayService) { 
    this._deliveryService.getStore()
      .subscribe((res) => this.store  = JSON.parse(res["_body"]));
  }

  ngOnInit() {
    /*this.regions();
    this.selectStore(this.selectedId);
  }

  regions() {
    this._deliveryService.getRegion()
      .subscribe((res) => this.region  = JSON.parse(res["_body"]));
  }
  
  selectStore(id: number) {
    this._deliveryService.getStoreByFk(id)
      .subscribe((res) => this.store = JSON.parse(res["_body"]));
  }*/