import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  singUpForm: FormGroup

  constructor() {
    this.singUpForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'userPhone': new FormControl('', Validators.pattern('[0-9]{10}')),
    })
  }

  log(data: any) {
    console.log(data.value)
  }
}
