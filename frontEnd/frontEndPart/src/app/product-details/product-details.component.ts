import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';
import { ProductDetailsService } from '../_services/productDetails.service';
import { ApiService } from '../_services/api.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = this.productdetails.getDetails();
  
  constructor(private productdetails: ProductDetailsService,private router: Router, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  deleteDetail(prodid: any)
  {
    
    console.log("hiiii");
    this.apiService.deleteProduct(prodid).subscribe(
      (res: any)=>
      {
        
        console.log("hiiii2");
        if(res == null){
          alert("deleted");
          this.router.navigate(['admin/Products']);
        } 
        else{
              alert("Not deleted");
        }
    }
    )
    
    console.log("hiiii");
  }

  giveDetails(product: products)
  {
    this.productdetails.giveDetails(product);
  }
}
