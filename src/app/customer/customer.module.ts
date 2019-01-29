import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { 
  id:number;
  name:string;
  surname:string;
  email:string;
  password:string;
}