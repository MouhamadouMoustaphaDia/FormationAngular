import { Injectable } from '@angular/core';
import {Contact} from "../models/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  set contacts(t: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(t));
  }

  get contacts(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts') || '[]');
  }

  generateId(){
    if(this.contacts !== null){
      return this.contacts.length + 1;
    }else {
      return 1;
    }
  }

  constructor() { }
}

