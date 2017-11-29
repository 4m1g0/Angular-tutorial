import { UsernameValidator } from './../common/validators/username-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // it is necesary to include ReactiveFormsModule to the imports of the module app for this
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpaces,
    ],
    [UsernameValidator.isUnique,
    UsernameValidator.banned]), // As this is an async validator shold be in the thirth parameter
    password: new FormControl('', Validators.required)
  });

  // this property gives use a shotcut acces to the formControl
  get username(){
    return this.form.get('username');
  }

  // this method will set valid or not the entire form
  login() {
    // () llamada al servidor...
    this.form.setErrors({invalidLogin:true});
  }

}
