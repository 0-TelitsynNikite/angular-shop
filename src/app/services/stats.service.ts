import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatsService {
  api = 'https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json'

  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get(this.api)
  }
}
