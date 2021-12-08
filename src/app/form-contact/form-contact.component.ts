import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Contact} from "../models/Contact";
import {NgForm} from "@angular/forms";
import {FormControlName} from "@angular/forms";

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
    public contact = new Contact();

    @Output() newContactEvent = new EventEmitter();

// ajout contact
    addContact(registerForm: NgForm){
      this.newContactEvent.emit({ contact: this.contact });
      this.contact = new Contact();
    }

    ngOnInit(): void {
    }
    constructor() { }
}
