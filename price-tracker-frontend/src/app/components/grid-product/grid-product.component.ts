import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

  showSignUp: Boolean = false;
  product!: Product;  
  threshold!: Number;

  @Input('products')
  data!: any;
  @Input('user')
  user!: User;  

  @Output()
  addProductEvent = new EventEmitter<{ product: Product, user: User, threshold: Number}>();

  constructor() {
    this.product = new Product("", "", "", "", "");
  }

  ngOnInit(): void {
  }

  openSignup() {
    this.showSignUp = !this.showSignUp;
  }

  addProduct(product: Product) {
    this.addProductEvent.emit({ product: product, user: this.user, threshold: this.threshold });
  }

}

