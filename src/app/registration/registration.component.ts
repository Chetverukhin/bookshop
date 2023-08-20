import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registration = { userName: '', email: '', password: '' }
  registrationForm: FormGroup;
  emailPattern = '[.\\-_a-z0-9]+@([a-z0-9][\\-a-z0-9]+\\.)+[a-z]{2,6}'
  phonePattern = '^\\+?[78][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$'

  constructor(private _builder: FormBuilder, private _authService : AuthService) {  

    this.registrationForm = _builder.group({
      userName: [
        this.registration.userName,
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: [
        this.registration.email,
        [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [
        this.registration.password,
        [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  register() {
    // this._authService.register(this.registrationForm.value).subscribe(data => {
    //   console.log(data)
    // })
  }

  get userName() {
    return this.registrationForm.get('userName')!
  }

  get email() {
    return this.registrationForm.get('email')!
  }

  get password() {
    return this.registrationForm.get('password')!
  }
}
