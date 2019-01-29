import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { ProductModModule } from '../product-mod/product-mod.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public items: ItemsModModule;
  public product: ProductModModule;
  prds = 0;
  numItms = 0;

  constructor(private _itemAddService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.getItems();
  }

  getProducts() {
    this._itemAddService.getProductData()
      .subscribe((resProductData) => this.product = JSON.parse(resProductData["_body"]));
  }
 
  getItems() {
    this._itemAddService.getItems()
    .subscribe((res) => this.items = JSON.parse(res["_body"]))
  }

  slctProd(id: number) {
    this.prds = id;
    this.numItms = Object.keys(this.items).length;
    console.log(this.numItms);
  }

  addItem = new FormGroup({
    barcode: new FormControl(''),
    brand: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    unit: new FormControl(''),
    weight: new FormControl(''),
    id: new FormControl(''),
    promotion: new FormControl(0),
    pid: new FormControl(''),
    quantity: new FormControl(1),
  })

  setItem() {
    let itm = this.addItem.value;
    itm.id = this.numItms+1;
    itm.pid = this.prds;

    while (itm.image.indexOf('\\') > 0) {
      itm.image = itm.image.slice(itm.image.indexOf('\\')+1);
    }
    
    this._itemAddService.postItem(itm).subscribe((itmz) => {
      this._itemAddService.setItemAdded(itm.name), itm = ItemsModModule, 
      this.router.navigate(['/app-admin-home'])
      }, (error) => { });
  }

  logout() {
    this._itemAddService.endUser();
    this.router.navigate(["/app-home"]);
  }
}
