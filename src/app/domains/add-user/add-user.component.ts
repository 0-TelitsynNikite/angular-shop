import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProductService} from "../../services/products.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  addProductsForm: FormGroup

  constructor(private http: ProductService) {
    this.addProductsForm = new FormGroup({
      'productType': new FormControl('', Validators.required),
      'productTitle': new FormControl('', Validators.required),
      'productPrice': new FormControl('', Validators.required),
      'productImg': new FormControl('', Validators.required)
    })
  }

  addUser(data: any) {
    this.http.addProduct({
      type: data.value.productType,
      title: data.value.productTitle,
      price: data.value.productPtice,
      img: data.value.productImg
    })

    this.addProductsForm.reset()
  }
}
