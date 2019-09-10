import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from 'src/app/products/products.service';
import { BorderDirective } from '../border.directive';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent, BorderDirective],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
