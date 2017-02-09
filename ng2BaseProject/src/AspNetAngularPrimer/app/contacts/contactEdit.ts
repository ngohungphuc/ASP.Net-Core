import { Component, OnInit, OnDestroy } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ContactService } from "./contactService";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonValidators } from "./commonValidators";
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import IPerson = App.Models.IPerson;

@Component({
    templateUrl: "app/contacts/contact-edit.html",
    styles: [`
        .friend {
            border-color: blue;
        }
        .not-friend {
            border-color: #ccc;
        }
        .birth-date {
            border-color: green;
        }
    `]
})
export class ContactEdit implements OnInit, OnDestroy {
    contact: IPerson = null;
    isBusy: boolean = false;
    personForm: FormGroup;
    private state: IPerson = null;
    private id: number;
    private subscription: Subscription;
    private deleteSubscription: Subscription;
    private nameSubscription: Subscription;
    private routeSubscription: Subscription;
    private validator: CommonValidators;
    constructor(
        private router: Router,
        private contactService: ContactService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toasterService: ToasterService) {

    }

    private processData = (data: IPerson) => {
        this.contact = data;
        this.validator.id = data.personId;
        this.saveState();
        this.personForm.patchValue(this.contact);
        if (this.isBusy) {
            this.toasterService.pop("info", "Notification", "Contact saved sucessfully");
        }

        if (this.id === 0) {
            this.router.navigate(["/contacts/" + this.contact.personId]);
        }
        this.isBusy = false;

    }

    private subscribeToNameChanges() {
        if (this.nameSubscription) {
            this.nameSubscription.unsubscribe();
        }
        var control = this.personForm.controls["name"];
        this.nameSubscription = control.valueChanges.subscribe((value: any) => {
            console.log("Name changed.  New name is " + value + ". Control's dirty state is " + control.dirty);
        });
    }

    ngOnInit(): void {
        this.subscription =
            this.contactService.contact.subscribe(this.processData);

        this.deleteSubscription =
            this.contactService.deletedPerson.subscribe(this.afterDelete);

        this.routeSubscription =
            this.route.params.subscribe((p: Params) => { this.id = parseInt(p["id"], 10) });

        this.validator = new CommonValidators();
        this.validator.contactService = this.contactService;
        this.personForm = this.formBuilder.group({
            "name": [null, Validators.compose([Validators.required, Validators.maxLength(30)]), this.validator.nameExists],
            "personId": [null]
        });

        if (this.id > 0) {
            this.contactService.getOne(this.id);
        } else {
            this.contact = {
                name: "",
                personId: 0
            }
            this.processData(this.contact);
        }

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.deleteSubscription.unsubscribe();
        if (this.nameSubscription) {
            this.nameSubscription.unsubscribe();
        }
    }

    save() {
        this.isBusy = true;
        this.contact = this.personForm.value;
        if (this.contact.personId === 0) {
            this.contactService.insert(this.contact);
        } else {
            this.contactService.update(this.contact);
        }
    }

    saveState() {
        this.state = JSON.parse(JSON.stringify(this.contact));
        this.personForm.reset();
        this.subscribeToNameChanges();
    }

    cancel() {
        this.contact = this.state;
        this.saveState();
        this.personForm.patchValue(this.contact);
    }

    onDelete() {
        this.contactService.delete(this.contact.personId);
    }

    afterDelete = (personId: number): void => {
        this.personForm.reset();
        this.router.navigate(["contacts"]);
    }


    back() {
        if (this.personForm.dirty) {
            alert("Please save or chancel your changes.");
        } else {
            this.router.navigate(["contacts"]);
        }
    }
}