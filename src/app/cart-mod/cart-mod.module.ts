import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartModModule { 
  id: number;
  quantity: number;
  date: string;
  cid: number;
  iid: number;
  pid: number;
  did: number;
  ordernum: number;
}
