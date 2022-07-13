import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  api = 'https://angular-9d2e6-default-rtdb.firebaseio.com/products.json'
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.api)
  }

  addProduct(url: string, task: any) {
    this.http.post(`${this.api}${url}.json`, task).subscribe()
  }
}
