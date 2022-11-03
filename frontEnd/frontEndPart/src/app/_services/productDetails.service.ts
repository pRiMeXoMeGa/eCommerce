import { Injectable } from '@angular/core';
import { products } from '../classes/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  item!: products;

  constructor() { }

  giveDetails(product: products){
    this.item = product;
    console.log(this.item)
  }

  getDetails(){
    return this.item;
  }
}
