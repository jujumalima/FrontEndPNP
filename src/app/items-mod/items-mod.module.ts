import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ItemsModModule { 
  id: number;
  barcode: string;
  brand: string;
  category: string;
  discovery: boolean;
  discription: string;
  image: string;
  name: string;
  price: number;
  promotion: boolean
  unit: number;
  weight: string;
  pid: number;
  quantity: number;
  itemsavailable: number;
}
