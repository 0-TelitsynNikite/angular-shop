import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {map} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  products: any = []

  constructor(private catalog: ProductService) { }

  ngOnInit() {
    this.catalog.getProducts()
      .pipe(
        map(data => Object.values(data))
      )
      .subscribe(data => this.products = data)
  }

}
