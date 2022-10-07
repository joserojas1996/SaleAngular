import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private prosuctSvc: ProductsService) { }

  ngOnInit(): void {
    this.prosuctSvc.getProducts()
    .pipe(tap((products: Product[]) => this.products = products))
    .subscribe();
  }

}
