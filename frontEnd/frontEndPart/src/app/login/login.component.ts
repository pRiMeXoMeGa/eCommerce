import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
// import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  
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
    console.log(this.loginForm.controls)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    this.router.navigate(['/user']);
  }

}
