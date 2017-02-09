import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { RouterModule, Router, RouterOutlet, RouterLink } from "@angular/router";
import { ContactModule } from "./contacts/contactModule";
import { HomePage } from "./home";
import { AppModuleRoutes } from "./routes";
import { PageNotFound } from "./pageNotFound";
import { DynamicPage, Option1, Option2 } from "./dynamicPage";

@NgModule({
    imports: [BrowserModule, AppModuleRoutes, ContactModule],
    declarations: [App, HomePage, PageNotFound, DynamicPage, Option1, Option2],
    providers: [],
    entryComponents: [Option1, Option2],
    bootstrap: [App]
})
export class AppModule { }