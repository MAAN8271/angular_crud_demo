import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[] = [];

 constructor(private userDataService: UserDataService) {
  this.userDataService.getUsers().subscribe((res: any) => {
    console.log(res)
    this.users = res;
  });
 }
 
}

export interface UserModel {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  state: string;
  userName: string;
}
