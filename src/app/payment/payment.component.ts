import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  securePay() {
    this.router.navigate(['/app-secure-pay']);
  }
}
