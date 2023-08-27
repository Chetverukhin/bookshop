import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Authentication, IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  authentication: Authentication = { email: '', password: '' };
  authenticationForm: FormGroup;

  constructor(private _builder: FormBuilder, private _identityService: IdentityService) {
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
    this._identityService.login(this.authenticationForm.value).subscribe(response => {
      console.log(response)
    })
  }

  get email() {
    return this.authenticationForm.get('email')!;
  }

  get password() {
    return this.authenticationForm.get('password')!;
  }
}
