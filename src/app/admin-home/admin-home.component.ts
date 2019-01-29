import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _adminService: PicknpayService, private router: Router) { }

  added = "";
  ngOnInit() {
    if (this._adminService.getItemAdded() != null) {
      this.added = this._adminService.getItemAdded();
    }
  }

  addItem() {
    if (this.added != "") {
      this._adminService.removegetItemAdded();
    }
    this.router.navigate(["/app-add-item"]);
  }

  updateItem() {
    if (this.added != "") {
      this._adminService.removegetItemAdded();
    }
    this.router.navigate(["/app-update-item"]);
  }

  deleteItem() {
    if (this.added != "") {
      this._adminService.removegetItemAdded();
    }
    this.router.navigate(["/app-delete-item"]);
  }
}
