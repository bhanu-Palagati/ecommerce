import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
      this.userService.updateLogin(false);
      this.router.navigate(['/users']);
   }

  ngOnInit() {
  }

}
