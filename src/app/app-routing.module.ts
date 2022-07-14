import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./domains/sign-up/sign-up-component";
import {AdminComponent} from "./domains/admin/admin.component";
import {AboutComponent} from "./domains/about/about.component";
import {CatalogComponent} from "./domains/catalog/catalog.component";
import {BasketComponent} from "./domains/basket/basket.component";
import {SignInComponent} from "./domains/sign-in/sign-in.component";
import {AddUserComponent} from "./domains/add-user/add-user.component";
import {StatsUserComponent} from "./domains/stats-user/stats-user.component";
import {AuthGuard} from "./guards/auth.guard";

const adminChildrenRoutes: Routes = [
  {path: '', component: AddUserComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'stats-user', component: StatsUserComponent, pathMatch: 'full'},
]

const routes: Routes = [
  {path: '', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'admin', component: AdminComponent, children: adminChildrenRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
