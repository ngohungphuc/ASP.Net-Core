﻿import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "dynamic-page",
    template: `
    <h2>Dynamic View</h2>
    <div #options></div>
    <button class="btn btn-default" (click)="back()">Home</button>
    `
})
export class DynamicPage implements OnInit  {

    @ViewChild("options", { read: ViewContainerRef })
        protected dynamicComponentTarget: ViewContainerRef;

    constructor(private router: Router, private resolver: ComponentFactoryResolver, private injector: Injector) {
    }

    ngOnInit(): void {
        if ((new Date().getDate() % 2) === 0) {
            this.resolver.resolveComponentFactory(Option1).create(
                this.injector, null, this.dynamicComponentTarget.element.nativeElement);
        } else {
            this.resolver.resolveComponentFactory(Option1).create(
                this.injector, null, this.dynamicComponentTarget.element.nativeElement);
        }

    }

    back(): void {
        this.router.navigate([""]);
    }
}

@Component({
    selector: "options",
    template: `
    <h3>Loaded on even day</h3>
`
})
export class Option1 {

}


@Component({
    selector: "options",
    template: `
  <h3>Loaded on odd day</h3>
    `
})
export class Option2 {

}
