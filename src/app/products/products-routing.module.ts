import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from 'src/app/products/products-list/products-list.component';
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'productsList',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
