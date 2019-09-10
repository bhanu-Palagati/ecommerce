import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
