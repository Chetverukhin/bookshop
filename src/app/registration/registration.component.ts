import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registration = { userName: '', email: '', password: '' }
  registrationForm: FormGroup;
  emailPattern = '[.\\-_a-z0-9]+@([a-z0-9][\\-a-z0-9]+\\.)+[a-z]{2,6}'

  constructor(private _builder: FormBuilder) {  

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
    console.log(this.registrationForm)
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
