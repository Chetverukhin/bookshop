import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  authenticationForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.authenticationForm = _builder.group({
      emailInput: [''],
      passwordInput: [''],
    });
  }

  login() {
    console.log(this.authenticationForm.value);
  }
}
