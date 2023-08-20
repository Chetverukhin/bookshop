import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.registrationForm = _builder.group({
      userNameInput: [''],
      emailInput: [''],
      passwordInput: [''],
    });
  }

  register(){
    console.log(this.registrationForm.value)
  }
}
