import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from 'src/app/orders/orders-list/orders-list.component';
import { OrderDetailComponent } from 'src/app/orders/order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: 'ordersList',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'orderDetail/:id',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
