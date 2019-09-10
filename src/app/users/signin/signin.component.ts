import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username = '';
  password = '';
  constructor(private userService: UserService, private router: Router) {
  }
  get users() {
    return this.userService.users;
  }
  login(form) {
    console.log(this.users);
    console.log(form.username, form.password);
    this.users.forEach(element => {
      if (form.username === element.userName) {
        if (form.password === element.password) {
          console.log('you are logged in');
          this.userService.updateLogin(true);
          this.router.navigate(['/products']);
        }
      }
    });
  }
  ngOnInit() {
  }

}
