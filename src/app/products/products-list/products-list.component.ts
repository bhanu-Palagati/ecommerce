import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router, private ordersService: OrdersService) { }

  get products() {
    return this.productsService.products;
  }
  detailView(id: number) {
    console.log('Detail view called', id );
    this.router.navigate(['/products/productDetail', id]);
  }
  order(product: any) {
    this.ordersService.orders.push(product);
    console.log(this.ordersService.orders);
}
  ngOnInit() {
  }

}
