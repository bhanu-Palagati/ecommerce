import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      userName: 'bhanu',
      password: '12345'
    },
    {
      userName: 'kamalesh',
      password: '12345'
    },
    {
      userName: 'pankaj',
      password: '12345'
    },
    {
      userName: 'rakheeb',
      password: '12345'
    },
  ];
  loggedIn = false;
  currentUser: any;
  constructor(private cookieService: CookieService) {
    this.cookieService.set('loggedIn', this.loggedIn.toString());
  }
  updateLogin(data: boolean) {
    this.loggedIn = data;
    this.cookieService.set('loggedIn', this.loggedIn.toString());
  }
}
