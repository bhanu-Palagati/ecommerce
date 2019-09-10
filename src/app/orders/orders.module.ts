import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductsService } from 'src/app/products/products.service';

@NgModule({
  declarations: [OrdersListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [ProductsService]
})
export class OrdersModule { }
