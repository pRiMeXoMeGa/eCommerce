import { Injectable } from '@angular/core';
import { products } from '../classes/products';
 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: products[] = [];
/* . . . */

  addToCart(product: products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}
