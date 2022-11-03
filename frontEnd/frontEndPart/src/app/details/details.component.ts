import { ProductDetailsService } from './../_services/productDetails.service';
import { CartService } from '../_services/cart.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product = this.productDetails.getDetails();

  constructor(private productDetails: ProductDetailsService, private cartService: CartService) { }
  ngOnInit(): void {
    
  }
  addToCart(product: products) {
    this.cartService.addToCart(product);
  }

}
