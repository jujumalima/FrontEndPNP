import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';
import { RegisterOnlineComponent } from './register-online/register-online.component';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
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
import { RecipesComponent } from './recipes/recipes.component';
import { InspirationComponent } from './inspiration/inspiration.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'app-home'},
  {path:'app-root', component:AppComponent },
  {path:'app-header', component:HeaderComponent },
  {path: 'app-home', component:HomeComponent },
  {path: 'app-footer', component:FooterComponent },
  {path: 'app-register-header', component:RegisterHeaderComponent },
  {path: 'app-register-online', component:RegisterOnlineComponent },
  {path: 'app-login', component:LoginComponent },
  {path: 'app-login-header', component:LoginHeaderComponent },
  {path: 'app-aisle', component:AisleComponent },
  {path: 'app-product', component:ProductComponent },
  {path: 'app-items', component:ItemsComponent },
  {path: 'app-cart', component:CartComponent},
  {path: 'app-catalougue', component:CatalougeComponent},
  {path: 'app-competition', component:CompetitionComponent},
  {path: 'app-delivery', component:DeliveryComponent},
  {path: 'app-order', component:OrderComponent},
  {path: 'app-payment', component:PaymentComponent},
  {path: 'app-secure-pay', component:SecurePayComponent},
  {path: 'app-add-item', component:AddItemComponent},
  {path: 'app-admin-home', component:AdminHomeComponent},
  {path: 'app-update-item', component:UpdateItemComponent},  
  {path: 'app-delete-item', component:DeleteItemComponent},
  {path: 'app-recipt', component:ReciptComponent},
  {path: 'app-forget-password', component:ForgetPasswordComponent},
  {path: 'app-delivery-guy', component:DeliveryGuyComponent},
  {path: 'app-supplier', component:SupplierComponent},
  {path: 'app-recipes', component:RecipesComponent},
  {path: 'app-inspiration', component:InspirationComponent},
  {path: '**', component:NotFoundComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
