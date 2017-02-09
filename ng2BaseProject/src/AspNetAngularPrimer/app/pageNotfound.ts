import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    template: `
    Page not found.  Additional route data: {{ missingRoute }}
    `
})
export class PageNotFound implements OnInit {
    missingRoute: any;
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            this.missingRoute = JSON.stringify(param);
        });
    }
}