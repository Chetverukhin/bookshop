import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  authentication = { email: '', password: '' };
  authenticationForm: FormGroup;

  constructor(private _builder: FormBuilder, private _authService: AuthService) {
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
    // this._authService.login(this.authenticationForm.value).subscribe(data => {
    //   console.log(data)
    // })
  }

  get email() {
    return this.authenticationForm.get('email')!;
  }

  get password() {
    return this.authenticationForm.get('password')!;
  }
}
