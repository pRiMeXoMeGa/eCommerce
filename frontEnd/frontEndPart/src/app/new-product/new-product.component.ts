import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProductForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) { }
  
  ngOnInit(): void {
    this.newProductForm = this.formBuilder.group({
      prodID: ['', Validators.required],
      prodName: ['', Validators.required],
      prodPrice: ['',Validators.required,],
      prodStock: ['', Validators.required],
      prodImg: ['', Validators.required],
      prodDes: ['', Validators.required]
  });
  }
  get f() { return this.newProductForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.newProductForm.invalid) {
        return;
    }
    
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newProductForm.value))

    this.apiService.addNewProduct(this.newProductForm.value).subscribe(
      (res: any)=>
      {
        if(res.msg ==='Inserted'){
          alert(res.msg);
        } 
        else{
            alert(res.msg);
        }
    }
    )
    console.log(this.newProductForm.controls);


  }

}
