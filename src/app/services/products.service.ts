import {Injectable} from "@angular/core";
import {HttpClient, HttpInterceptor} from "@angular/common/http";

@Injectable()
export class ProductService {
  api = 'https://angular-9d2e6-default-rtdb.firebaseio.com/products'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.api}.json`)
  }

  addProduct(task: any) {
    this.http.post(`${this.api}.json`, task).subscribe()
  }
}
