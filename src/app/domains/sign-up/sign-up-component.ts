import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singUpForm: FormGroup
  isSignedIn = false

  constructor(public auth: AuthService) {
    this.singUpForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'userPassword': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignUp(data: any) {
    await this.auth.signUp(data.value.userEmail, data.value.userPassword)

    if (this.auth.isLoggedIn) {
      this.isSignedIn = true
    }
  }

  log(data: any) {
    console.log(data.value)
  }
}
