import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  public items: ItemsModModule
  constructor(private _deleteService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getItems();
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

  itemRemove(){
    let itm = this.itemsData.value;
    this._deleteService.deletItem(itm.id)
      .subscribe(res => { 
        this.router.navigate(['/app-admin-home'])
      });
  }

  getItems() {
    this._deleteService.getItems()
      .subscribe(res => this.items = JSON.parse(res["_body"]));
  }

  logout() {
    this._deleteService.endUser();
    this.router.navigate(["/app-home"]);
  }
}
