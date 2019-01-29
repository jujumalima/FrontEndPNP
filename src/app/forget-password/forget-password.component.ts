import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public cust: CustomerModule;

  constructor(private _pnpService: PicknpayService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  userData = new FormGroup({
    email: new FormControl('')
  })

  getPassword() {
    this._pnpService.rstPassword(this.userData.controls['email'].value)
      .subscribe(res => this.openDialog());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        userMail: this.userData.controls['email'].value
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {this.router.navigate(["/app-home"])});
  }
}
