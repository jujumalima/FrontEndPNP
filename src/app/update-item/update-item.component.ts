import { Component, OnInit } from '@angular/core';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
 
  public items: ItemsModModule;
  public item: ItemsModModule;

  err: string = "";
  
  constructor(private _updateService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getItems();

    this.getItem()
  }

  itemsData = new FormGroup({
    barcode: new FormControl(''),
    brand: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    unit: new FormControl(''),
    weight: new FormControl(''),
    id: new FormControl(''),
    promotion: new FormControl(''),
    pid: new FormControl(''),
    quantity: new FormControl(''),
    category: new FormControl(''),
    discovery: new FormControl(''),
    discription: new FormControl(''),  
  });

  getItems() {
    this._updateService.getItems()
      .subscribe(res => this.items = JSON.parse(res["_body"]));
  }

  getItem() {
    let i = this.itemsData.value;
    
    if (this._updateService.getItem(i.id)){
      this._updateService.getItem(i.id)
        .subscribe((res) => this.item = JSON.parse(res["_body"]), (error) => this.err = "Invalid name!" );
    }
      
  }


}
