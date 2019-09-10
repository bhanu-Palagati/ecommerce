import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private ordersService: OrdersService, private router: Router) {
    console.log(this.ordersService.orders);
  }
  get orders() {
    return this.ordersService.orders;
  }

  ngOnInit() {
  }
  detail(id: number) {
    this.router.navigate(['/orders/orderDetail', id]);
  }
  delete(id: number) {
      this.ordersService.orders = this.ordersService.orders.filter(order => order.id !== id);
  }
}
