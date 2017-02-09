import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Contacts } from "./contacts";

export class ContactActivator implements CanDeactivate<Contacts>, CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("canActivate called");
        return true;
    }
    canDeactivate(component: Contacts, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("canDeactivate called");
        return true;
    }
}