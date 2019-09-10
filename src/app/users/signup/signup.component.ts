import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  set users(value: any) {
    this.userService.users.push(value);
  }
  get users() {
    return this.userService.users;
  }
  update() {
    this.users = this.signUpForm.value;
    console.log(this.signUpForm.value);
    this.router.navigate(['/users']);
  }

}
