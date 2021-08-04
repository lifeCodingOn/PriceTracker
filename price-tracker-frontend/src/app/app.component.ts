import { Component } from '@angular/core';
import { ProductsService } from './_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";
<<<<<<< HEAD
=======
import { TokenStorageService } from './_service/token-storage.service';
>>>>>>> feature/Auth


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price-tracker-frontend-bootstrap';
  query!: String;
  source!: String;
  products: any;

<<<<<<< HEAD
  constructor(private product: ProductsService, private spinner: NgxSpinnerService) { }
=======
  isLoggedIn = false;


  constructor(private product: ProductsService, private spinner: NgxSpinnerService, private tokenStorageService: TokenStorageService) { }
>>>>>>> feature/Auth

  getProduct($event: any) {
    this.spinner.show();
    this.product.getProducts($event.query, $event.source).subscribe(data => {
      this.spinner.hide()
      this.products = data;
      console.log(this.products);
    });
  }
<<<<<<< HEAD
=======

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("Loggato: "+this.isLoggedIn);
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log("Utente:" +user);
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

>>>>>>> feature/Auth
}
