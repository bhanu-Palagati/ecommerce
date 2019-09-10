import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/users/signin/signin.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';
import { SignoutComponent } from 'src/app/users/signout/signout.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signin',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
