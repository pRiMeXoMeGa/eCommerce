import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { HttpClient,HttpHeaders , HttpParams } from "@angular/common/http";


@Injectable({
    providedIn: 'root',
  })
export class ApiService
{
    PATH_OF_API = 'http://localhost:8080';

    constructor(private httpClient: HttpClient){ }

    getAuthenticated(loginData:any): Observable<any>{
        return this.httpClient.post(this.PATH_OF_API+'/login',loginData);
    }

    registerNewUser(signupData:any): Observable<any>{
      return this.httpClient.post(this.PATH_OF_API+'/register',signupData);
    }

    getProducts(): Observable<any>{
      return this.httpClient.get(this.PATH_OF_API+'/all');
    }

    addNewProduct(productDetail:any){
      return this.httpClient.post(this.PATH_OF_API+'/addNewProduct',
                                                      productDetail);
    }

    deleteProduct(prodID:any){
      return this.httpClient.delete(this.PATH_OF_API+'/deleteProduct/'+prodID);
    }

    updateProduct(productDetail:any){
      return this.httpClient.put(this.PATH_OF_API+'/updateProduct',
                                                    productDetail);
    }
    
    // getProductsinCart(): Observable<any>{
    //     return this.httpClient.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick");
    // }

    


}
