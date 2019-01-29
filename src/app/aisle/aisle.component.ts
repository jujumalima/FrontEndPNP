import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AisleModModule } from './../aisle-mod/aisle-mod.module'
import { PicknpayService } from '../picknpay.service';

@Component({
  selector: 'app-aisle',
  templateUrl: './aisle.component.html',
  styleUrls: ['./aisle.component.css']
})
export class AisleComponent implements OnInit {

  public aisleMod: AisleModModule;
  constructor(private _aisleService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getAisleData();
  }

  getAisleData(){
    this._aisleService.getAisle()
      .subscribe((resAisleData) => this.aisleMod = JSON.parse(resAisleData["_body"]));
  }

  setAisle(aisle1: AisleModModule){
    this._aisleService.setAaisle(aisle1);
    this.router.navigate(['/app-product']);
  }
} 