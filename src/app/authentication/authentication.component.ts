import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  authentication = { email: '', password: '' };
  authenticationForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.authenticationForm = _builder.group({
      email: [
        this.authentication.email, 
        [Validators.required]],
      password: [
        this.authentication.password,
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  login() {
    console.log(this.authenticationForm);
  }

  get email() {
    return this.authenticationForm.get('email')!;
  }

  get password() {
    return this.authenticationForm.get('password')!;
  }
}
