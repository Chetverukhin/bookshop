import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.loginForm = _builder.group({
      emailInput: [''],
      passwordInput: [''],
    });
  }

  login() {
    console.log(this.loginForm.value);
  }
}
