import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from "@angular/core";
import { ContactService } from "./contactService";
import { ContactListItem } from "./contactListItem";
import { Router } from "@angular/router";

import IPerson = App.Models.IPerson;

@Component({
    selector: "contacts-list",
    /*language=html*/
    template: `
<h1>Contacts</h1>
<button class="btn btn-primary new-button" type="button" (click)="newContact()">New</button>
<ul class="list-group">
  <contact-item *ngFor="let item of contacts" [contact]="item">
  </contact-item>
</ul>
    `
})

export class ContactList implements OnInit, AfterViewInit {

    contacts: IPerson[];
    @ViewChildren(ContactListItem) viewChildren: QueryList<ContactListItem>;

    constructor(private contactService: ContactService, private router: Router) {
        this.contactService.contacts.subscribe(this.processData);

    }
    processData = (data: IPerson[]) => {
        this.contacts = data;
    }

    ngOnInit(): void {
        this.contactService.getAll();
    }

    newContact(): void {
        this.router.navigate(["/contacts/0"]);
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
        console.log(this.viewChildren);
    }

}