import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SidebarComponent } from 'src/app/element/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ProductsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
