import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import { PicknpayService } from './picknpay.service';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';
import { RegisterOnlineComponent } from './register-online/register-online.component';
import { AisleComponent } from './aisle/aisle.component';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { CompetitionComponent } from './competition/competition.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { SecurePayComponent } from './secure-pay/secure-pay.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReciptComponent } from './recipt/recipt.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DeliveryGuyComponent } from './delivery-guy/delivery-guy.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MatDialogModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { RecipesComponent } from './recipes/recipes.component';
import { InspirationComponent } from './inspiration/inspiration.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoginHeaderComponent,
    RegisterHeaderComponent,
    RegisterOnlineComponent,
    AisleComponent,
    ProductComponent,
    ItemsComponent,
    CartComponent,
    CatalougeComponent,
    CompetitionComponent,
    DeliveryComponent,
    OrderComponent,
    PaymentComponent,
    SecurePayComponent,
    AddItemComponent,
    AdminHomeComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    NotFoundComponent,
    ReciptComponent,
    ForgetPasswordComponent,
    DeliveryGuyComponent,
    SupplierComponent,
    DialogComponent,
    RecipesComponent,
    InspirationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgMatSearchBarModule,
    MatDialogModule,
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [PicknpayService],
  bootstrap: [AppComponent]
})
export class AppModule { }