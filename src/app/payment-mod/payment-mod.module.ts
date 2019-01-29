import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaymentModModule {
  id: number;
  cardnum: number;
  cvv: number;
  exdate: string;
  name: string;
 }
