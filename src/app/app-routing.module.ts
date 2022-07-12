import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./domains/sign-up/sign-up-component";
import {AdminComponent} from "./domains/admin/admin.component";
import {AboutComponent} from "./domains/about/about.component";
import {CatalogComponent} from "./domains/catalog/catalog.component";
import {BasketComponent} from "./domains/basket/basket.component";
import {SignInComponent} from "./domains/sign-in/sign-in.component";

const routes: Routes = [
  {path: '', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
