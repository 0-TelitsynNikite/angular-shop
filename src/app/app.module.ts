import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './domains/about/about.component';
import { CatalogComponent } from './domains/catalog/catalog.component';
import { AdminComponent } from './domains/admin/admin.component';
import { SignUpComponent } from './domains/sign-up/sign-up-component';
import { BasketComponent } from './domains/basket/basket.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';
import { SignInComponent } from './domains/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogComponent,
    AdminComponent,
    SignUpComponent,
    BasketComponent,
    MainHeadingComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
