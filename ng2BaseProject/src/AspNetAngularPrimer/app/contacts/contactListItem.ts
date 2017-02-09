import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import IPerson = App.Models.IPerson;

@Component({
    selector: "contact-item",
    template: `
  <li class="list-group-item" makeLarge="red">
    <button class="btn btn-default edit-button-with-label" (click)="clicked(contact)">Edit</button>
    <span>{{contact.name| shorten:4}}</span>
  </li>
    `,
    inputs: ["contact"],
    styles: [`
        .edit-button-with-label {
            margin-right: 10px;
            font-size: inherit;
        }
`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListItem {
    contact: IPerson;
    constructor(private router: Router) {
    }
    clicked(contact: IPerson): void {
        this.router.navigate(["/contacts/" + contact.personId]);
    }

}