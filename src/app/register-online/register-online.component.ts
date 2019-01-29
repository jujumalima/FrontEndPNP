import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerModule } from '../customer/customer.module';
import { PicknpayService } from '../picknpay.service';


@Component({
  selector: 'app-register-online',
  templateUrl: './register-online.component.html',
  styleUrls: ['./register-online.component.css']
})
export class RegisterOnlineComponent implements OnInit {

  constructor(private _pnpService: PicknpayService, private router: Router) { }

  ngOnInit() {
  }

  regOnlineCust = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confPassword: new FormControl(''),
  })

  createOnlineCust(){
    if (this.regOnlineCust.value.password == this.regOnlineCust.value.confPassword){
      let customer = this.regOnlineCust.value;
      console.log(customer);
      this.router.navigate(['/app-login']);
      this._pnpService.postCustomer(customer).subscribe((cust) => {
        customer = CustomerModule;
      }, (error) => { });

      this._pnpService.setUser(customer);
    }
  }
}