import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // url="https://catfact.ninja";
  baseUrl = 'https://localhost:44332';

  constructor(private http:HttpClient) { }
  // getUsers(){
  //   return this.http.get(this.url+'/breeds');
  // }

  getUsers() {
    return this.http.get(this.baseUrl + '/Home/StudentListData');
  }
}
