import { Component, OnInit } from '@angular/core';
import { ContactService, ContactData } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public name: string;
public email: string;
public message: string;
public service: any;

public isEmailInvalid: boolean;
public isNameInvalid: boolean;


  constructor(service: ContactService) {
  
this.service = service;
const data: ContactData = this.service.getContactData();

if (data) {

this.name = data.name;
this.email = data.email;
this.message = data.message;
} else {
  this.name = '';
this.email = '';
this.message = '';
}

}
  ngOnInit() {
  }

  public emailChanged() {
    this.validateEmail();
  }
public formSubmit(): void {
  this.validateEmail();
  this.validateName();

//   if (this.isNameInvalid) {
// console.log('wartość pola name jest niepoprawna');
//   } else {
//     console.log('wartość pola name jest OK');
//   }
//   if (this.isEmailInvalid) {
// console.log('wartość pola email jest niepoprawna');
//   } else {
//     console.log('wartość pola email jest OK');
//   }

if (this.isNameInvalid || this.isEmailInvalid) { // isNameInvalid = false
  console.log('wartość pola name lub email jest niepoprawna')
} else {
  console.log('wartość pola name i email jest OK')
}
this.service.saveContactData(this.name, this.email, this.message)

if (!this.isNameInvalid && !this.isEmailInvalid)   {
  this.service.saveContactData(
    this.name,
    this.email,
    this.message);
}
}

  private validateEmail(): void {
    if (this.email.length > 0 && /[a-z]@[a-z]/.test(this.email)) {
      this.isEmailInvalid = false;
    } else {
      this.isEmailInvalid = true;
    }
  }

  private validateName(): void {
    if (this.name.length > 0) {
      this.isNameInvalid = false;
    } else {
      this.isNameInvalid = true;
    }
  }
  
}

