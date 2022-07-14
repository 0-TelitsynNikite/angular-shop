import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  signInForm: FormGroup
  isSignedIn = false

  constructor(private auth: AuthService) {
    this.signInForm = new FormGroup({
      'userPassword': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    })
  }

  ngOnInit() {
    this.isSignedIn = !!localStorage.getItem('user')
  }

  async onSignIn(data: any) {
    await this.auth.signIn(data.value.userEmail, data.value.userPassword)

    if (this.auth.isLoggedIn) {
      this.isSignedIn = true
    }

    this.signInForm.reset()
  }
}
