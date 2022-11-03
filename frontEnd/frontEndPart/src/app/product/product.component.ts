import { ApiService } from '../_services/api.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';
import { CartService } from '../_services/cart.service';
import { ProductDetailsService } from '../_services/productDetails.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
  

  productslist!: products[];

  constructor(private apiservice: ApiService, private cartService: CartService, 
    private productdetails: ProductDetailsService) { }

  ngOnInit(): void {
    this.apiservice.getProducts().subscribe(
      data=>
      {
          this.productslist = data;
      }
    )
  }

  addToCart(product: products) {
    this.cartService.addToCart(product);
  }

  giveDetails(product: products)
  {
    this.productdetails.giveDetails(product);
  }

}

