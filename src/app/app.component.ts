import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "./models/Contact";
import {ContactService} from "./servive/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-form-angular';

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contacts = this.contactService.contacts;
  }

  newContact(newContactEvent: any) {
    newContactEvent.contact.id = this.contactService.generateId();
    this.contacts.push(newContactEvent.contact);
    this.contactService.contacts = this.contacts;

  }

  newInfo?: Contact ;
  getInfoContact(id:number){
    for(let i = 0; i <= this.contacts.length; i++){
      if(id == this.contacts[i].id){
       this.newInfo = this.contacts[i];
        console.log(this.newInfo);
      }


    }

  }

}
