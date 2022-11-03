import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../_services/api.service';
// import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    loginResponse: any;
    constructor(private formBuilder: FormBuilder, private router: Router, private apiService:ApiService) { }
    
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10),
                  Validators.pattern('^[a-zA-Z0-9]([_](?![_])|[a-zA-Z0-9]){8,}[a-zA-Z0-9]$')]],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$')]]
    });
    }
    get f() { 
      return this.loginForm.controls; 
    }

    onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    
    this.apiService.getAuthenticated(this.loginForm.value).subscribe(
      (res: any)=>
      {
          this.loginResponse = res;
          console.log("inserted");
          if(this.loginResponse.usertype == null){
            if(this.loginResponse.msg ==='SignupFirst'){
              alert("Kindly Sign up before login ");
              this.router.navigate(['/signup']);
            }
            else{
              alert("Password Incorrect!!! Please try again");
            }
          }
          else{
            if(this.loginResponse.usertype === 'admin'){
              this.router.navigate(['/admin/Products']);
            }
            else if(this.loginResponse.usertype === 'user'){
              this.router.navigate(['/home/product']);
            }
          }
    }
    )



    // this.router.navigate(['/admin']);
  }

}
