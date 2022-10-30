import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['',Validators.required,],
      email: ['', [Validators.required, Validators.email,
                  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      c_password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.signupForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
        return;
    }
    console.log(this.signupForm.controls)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))
  }

}
