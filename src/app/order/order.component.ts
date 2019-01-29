import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { PicknpayService } from '../picknpay.service';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
 
  public itms: ItemsModModule;
  cost = "";
  err = "";

  constructor(private _ordService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getfrmItms();
    this.cost = this._ordService.getTotalCost();
  }

  getfrmItms() {
    this._ordService.getTempCart().subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }

  purchaseNum = new FormGroup({
    num: new FormControl(''),
  })

  checkout() {
    if (this.purchaseNum.controls['num'].value != "") {
      this.router.navigate(["/app-payment"]);
      this._ordService.setRef(this.purchaseNum.controls['num'].value);

    } else {
      this.err = "Invalid number! Try again!";
    }
  }
}
