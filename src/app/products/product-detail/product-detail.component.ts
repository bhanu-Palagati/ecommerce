import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService,
              private location: Location, private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.loadProduct(this.id);
  }
  loadProduct(id) {
    this.product = this.productsService.products.find(prod => prod.id == this.id);
    console.log(this.product);
  }
  order() {
      this.ordersService.orders.push(this.product);
      console.log(this.ordersService.orders);
  }
  back() {
    this.location.back();
  }

}
