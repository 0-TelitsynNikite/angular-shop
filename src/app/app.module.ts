import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./services/products.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './domains/about/about.component';
import { CatalogComponent } from './domains/catalog/catalog.component';
import { SignUpComponent } from './domains/sign-up/sign-up-component';
import { BasketComponent } from './domains/basket/basket.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';
import { SignInComponent } from './domains/sign-in/sign-in.component';
import {AuthService} from "./services/auth.service";
import { AdminComponent } from './domains/admin/admin.component';
import { AddUserComponent } from './domains/add-user/add-user.component';
import { StatsUserComponent } from './domains/stats-user/stats-user.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogComponent,
    SignUpComponent,
    BasketComponent,
    MainHeadingComponent,
    SignInComponent,
    AdminComponent,
    AddUserComponent,
    StatsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCOi1sZcM7rTZzZpoOVr74y27S3a_IUbls",
      authDomain: "angular-auth-9cd48.firebaseapp.com",
      projectId: "angular-auth-9cd48",
      storageBucket: "angular-auth-9cd48.appspot.com",
      messagingSenderId: "237434232313",
      appId: "1:237434232313:web:12d5b83de2972b08de3128",
      measurementId: "G-PZN822VSJ7"
    })
  ],
  providers: [
    ProductService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
