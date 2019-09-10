import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/orders/orders.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id: number;
  order: any;
  constructor(private activatedRoute: ActivatedRoute, private ordersService: OrdersService, private location: Location) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.loadOrder(this.id);
  }
  loadOrder(id) {
    this.order = this.ordersService.orders.find(ord => ord.id == this.id);
    console.log(this.order);
  }
  back() {
    this.location.back();
  }


}
