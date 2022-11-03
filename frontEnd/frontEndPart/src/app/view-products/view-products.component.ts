import { ApiService } from '../_services/api.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';
import { ProductDetailsService } from '../_services/productDetails.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productslist!: products[];

  constructor(private apiservice: ApiService,private router: Router, private productdetails: ProductDetailsService) { }

  ngOnInit(): void {
    this.apiservice.getProducts().subscribe(
      data=>
      {
          this.productslist = data;
      }
    )
  }
  giveDetails(product: products)
  {
    this.productdetails.giveDetails(product);
  }

  deleteDetail(prodid: any)
  {
    
    console.log("hiiii");
    this.apiservice.deleteProduct(prodid).subscribe(
      (res: any)=>
      {
        
        console.log("hiiii2");
        if(res == null){
          alert("deleted");
          this.ngOnInit();
        } 
        else{
              alert("Not deleted");
        }
    }
    )
    
    console.log("hiiii");
  }

}
