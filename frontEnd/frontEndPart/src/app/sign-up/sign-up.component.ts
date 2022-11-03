import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  pass = false;

  signupResponse :any;

  constructor(private formBuilder: FormBuilder,private router: Router,  
    private apiService:ApiService) { }
  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(10),
        Validators.pattern('^[a-zA-Z0-9]([_](?![_])|[a-zA-Z0-9]){8,}[a-zA-Z0-9]$')]],
      phone: ['',[Validators.required, Validators.pattern('^\\d{10}$')]],
      email: ['', [Validators.required, Validators.email,
                  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$')]],
      c_password: ['', [Validators.required, Validators.minLength(8)]],
  });
  }
  get f() { return this.signupForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
        return;
    }
    this.signupForm.value.usertype = "user";
    // console.log(this.signupForm.value.usertype)
    console.log(this.signupForm.value);
    // console.log(this.signupForm.controls);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))

    this.apiService.registerNewUser(this.signupForm.value).subscribe(
      (res: any)=>
      {
        this.signupResponse = res;
        if(this.signupResponse.msg ==='Inserted'){
          alert(this.signupResponse.msg);
          this.router.navigate(['/login']);
        } 
        else{
          if(this.signupResponse.msg ==='NotInserted')
              alert("Having problem in Signing up new user....");
          else{
              alert(this.signupResponse.msg);
              this.router.navigate(['/login']);
          }
        }
    }
    )
  }

  checkPassword() {
    const password = this.signupForm.get('password');
    const confirmPassword = this.signupForm.get('c_password');
    if(password===confirmPassword) 
      this.pass=true
    else 
      this.pass=false
  }

}


