import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
public dataStorageKey: string = 'contactData';
  public saveContactData(
    name: string,
    email: string,
    message: string,
  ): void {
    const contactData: ContactData = {
      name, // lub name: name,
      email, // lub email: email,
      message, // lub message: message
    };
                                //klucz                       //wartość
    window.localStorage.setItem(this.dataStorageKey, JSON.stringify(contactData));
    //window - okno przeglądarki, localStorage - miejsce do przechowywania danych, localStorage.setItem - zapisywanie wartości danego klucza, localStorage.getItem - odczytanie wartości danego klucza, JSON - biblioteka słuąca do kodowania i odkodowywania obiektów/stringów, JSON.stringify - kodowanie obiektu do stringa, JSON.parse - dekodowanie obiektu ze stringa
    console.log("Dane zostały zapisane.");
  }
  public getContactData(): ContactData {
    const encoded: string = window.localStorage.getItem(this.dataStorageKey);
    console.log(this.dataStorageKey);
    const contactData: ContactData = JSON.parse(encoded);
    return contactData;
  }
}
