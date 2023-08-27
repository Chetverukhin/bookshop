import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityService, Registration } from '../services/identity.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {

  registration: Registration = { userName: '', email: '', password: '' }
  registrationForm: FormGroup;

  emailPattern = '[.\\-_a-z0-9]+@([a-z0-9][\\-a-z0-9]+\\.)+[a-z]{2,6}'
  phonePattern = '^\\+?[78][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$'

  constructor(private _builder: FormBuilder, private _identityService: IdentityService) {
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
    this._identityService.register(this.registrationForm.value).subscribe(response => {
      console.log(response)
    })
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
