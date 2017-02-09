import { Router } from "@angular/router";
import { Component } from "@angular/core";
@Component({
    selector: "home-page",
    template: `
    <h2>Home Page</h2>
    <button class="btn btn-default" (click)="invalid()">Move to invalid page</button>
    `
})
export class HomePage {
    constructor(private router: Router) {

    }

    invalid(): void {
        this.router.navigate(["zzzz", { id: "zzz" }]);
    }
}