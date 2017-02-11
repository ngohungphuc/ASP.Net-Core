"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var contactList_1 = require("./contactList");
var contactActivator_1 = require("./contactActivator");
var contactListItem_1 = require("./contactListItem");
var contactEdit_1 = require("./contactEdit");
var contactService_1 = require("./contactService");
var contactRoutes_1 = require("./contactRoutes");
var contacts_1 = require("./contacts");
var configuration_1 = require("../configuration");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var shorten_1 = require("../commonPipes/shorten");
var makeLarge_1 = require("../commonDirectives/makeLarge");
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, contactRoutes_1.ContactRouting, forms_1.FormsModule, forms_1.ReactiveFormsModule, angular2_toaster_1.ToasterModule],
        declarations: [contactList_1.ContactList, contactListItem_1.ContactListItem, contacts_1.Contacts, contactEdit_1.ContactEdit, shorten_1.Shorten, makeLarge_1.MakeLarge],
        providers: [configuration_1.Configuration, http_1.HttpModule, contactService_1.ContactService, contactActivator_1.ContactActivator],
        exports: [contactList_1.ContactList]
    })
], ContactModule);
exports.ContactModule = ContactModule;
//# sourceMappingURL=contactModule.js.map