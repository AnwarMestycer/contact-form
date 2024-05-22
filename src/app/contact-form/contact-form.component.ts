import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  invalidInput: string;
  invalidEmail: string = '';
  invalidFirstname: string = '';
  invalidLastname: string = '';
invalidMessage:string = '';
  constructor(private formBuilder: FormBuilder) {}

  contactForm = this.formBuilder.group({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required,  Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)]),
    querytype: new FormControl('', Validators.required),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(140),
    ]),
    accept: new FormControl(''),
  });

  

  submitForm() {
    if (!this.contactForm.value.firstname) {
      this.invalidFirstname = "invalid"    
    }
    if (!this.contactForm.value.lastname) {
      this.invalidLastname = "invalid"    
    }
    if (!this.contactForm.value.email) {
      this.invalidEmail = "invalid"    
    }
    if (!this.contactForm.value.message) {
      this.invalidMessage = "invalid"    
    }
    else {
       console.log(this.contactForm.value);
  }


}
}
