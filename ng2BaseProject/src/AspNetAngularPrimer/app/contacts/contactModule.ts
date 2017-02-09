import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContactList } from "./contactList";
import { ContactActivator } from "./contactActivator";
import { ContactListItem } from "./contactListItem";
import { ContactEdit } from "./contactEdit";
import { ContactService } from "./contactService";
import { ContactRouting } from "./contactRoutes";
import { Contacts } from "./contacts";
import { Configuration } from "../configuration";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { Shorten } from "../commonPipes/shorten";
import { MakeLarge } from "../commonDirectives/makeLarge";

@NgModule({
    imports: [BrowserModule, HttpModule, ContactRouting, FormsModule, ReactiveFormsModule, ToasterModule],
    declarations: [ContactList, ContactListItem, Contacts, ContactEdit, Shorten, MakeLarge],
    providers: [Configuration, HttpModule, ContactService, ContactActivator],
    exports: [ContactList]
})
export class ContactModule { }
