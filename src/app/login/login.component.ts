import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerModule } from '../customer/customer.module';
import { PicknpayService } from '../picknpay.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PicknpayService] //remove
})
export class LoginComponent implements OnInit {

  public cust: CustomerModule;

  constructor(private _pnpService: PicknpayService, private router: Router) { }

  ngOnInit() {
  }

  loginCust = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  custLogin() {
    
    let email = this.loginCust.controls['email'].value;
    let password = this.loginCust.controls['password'].value;

    this._pnpService.getCustomerLogin(email, password)
      .subscribe((resCustomerData) => 
      {this.cust = resCustomerData;
        this._pnpService.setUser(this.cust);
        if (email == "delivery123Guy@gmails.com") {
          this.router.navigate(['/app-delivery-guy']);
        } else {
          if (email == "admin123Guy@gmails.com"){
            this.router.navigate(['/app-admin-home']);
          } else {
            if (email == "supplier123Guy@gmails.com") {
              this.router.navigate(['/app-supplier'])
            } else {
              this.router.navigate(['/app-home'])
            }
          }
        }
        
    });
  }
}