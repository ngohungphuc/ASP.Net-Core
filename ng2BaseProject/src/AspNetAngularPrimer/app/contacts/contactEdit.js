"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contactService_1 = require("./contactService");
var forms_1 = require("@angular/forms");
var commonValidators_1 = require("./commonValidators");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var ContactEdit = (function () {
    function ContactEdit(router, contactService, route, formBuilder, toasterService) {
        var _this = this;
        this.router = router;
        this.contactService = contactService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toasterService = toasterService;
        this.contact = null;
        this.isBusy = false;
        this.state = null;
        this.processData = function (data) {
            _this.contact = data;
            _this.validator.id = data.personId;
            _this.saveState();
            _this.personForm.patchValue(_this.contact);
            if (_this.isBusy) {
                _this.toasterService.pop("info", "Notification", "Contact saved sucessfully");
            }
            if (_this.id === 0) {
                _this.router.navigate(["/contacts/" + _this.contact.personId]);
            }
            _this.isBusy = false;
        };
        this.afterDelete = function (personId) {
            _this.personForm.reset();
            _this.router.navigate(["contacts"]);
        };
    }
    ContactEdit.prototype.subscribeToNameChanges = function () {
        if (this.nameSubscription) {
            this.nameSubscription.unsubscribe();
        }
        var control = this.personForm.controls["name"];
        this.nameSubscription = control.valueChanges.subscribe(function (value) {
            console.log("Name changed.  New name is " + value + ". Control's dirty state is " + control.dirty);
        });
    };
    ContactEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription =
            this.contactService.contact.subscribe(this.processData);
        this.deleteSubscription =
            this.contactService.deletedPerson.subscribe(this.afterDelete);
        this.routeSubscription =
            this.route.params.subscribe(function (p) { _this.id = parseInt(p["id"], 10); });
        this.validator = new commonValidators_1.CommonValidators();
        this.validator.contactService = this.contactService;
        this.personForm = this.formBuilder.group({
            "name": [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(30)]), this.validator.nameExists],
            "personId": [null]
        });
        if (this.id > 0) {
            this.contactService.getOne(this.id);
        }
        else {
            this.contact = {
                name: "",
                personId: 0
            };
            this.processData(this.contact);
        }
    };
    ContactEdit.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.deleteSubscription.unsubscribe();
        if (this.nameSubscription) {
            this.nameSubscription.unsubscribe();
        }
    };
    ContactEdit.prototype.save = function () {
        this.isBusy = true;
        this.contact = this.personForm.value;
        if (this.contact.personId === 0) {
            this.contactService.insert(this.contact);
        }
        else {
            this.contactService.update(this.contact);
        }
    };
    ContactEdit.prototype.saveState = function () {
        this.state = JSON.parse(JSON.stringify(this.contact));
        this.personForm.reset();
        this.subscribeToNameChanges();
    };
    ContactEdit.prototype.cancel = function () {
        this.contact = this.state;
        this.saveState();
        this.personForm.patchValue(this.contact);
    };
    ContactEdit.prototype.onDelete = function () {
        this.contactService.delete(this.contact.personId);
    };
    ContactEdit.prototype.back = function () {
        if (this.personForm.dirty) {
            alert("Please save or chancel your changes.");
        }
        else {
            this.router.navigate(["contacts"]);
        }
    };
    return ContactEdit;
}());
ContactEdit = __decorate([
    core_1.Component({
        templateUrl: "app/contacts/contact-edit.html",
        styles: ["\n        .friend {\n            border-color: blue;\n        }\n        .not-friend {\n            border-color: #ccc;\n        }\n        .birth-date {\n            border-color: green;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        contactService_1.ContactService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        angular2_toaster_1.ToasterService])
], ContactEdit);
exports.ContactEdit = ContactEdit;
//# sourceMappingURL=contactEdit.js.map