"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_1 = require("./app");
var contactModule_1 = require("./contacts/contactModule");
var home_1 = require("./home");
var routes_1 = require("./routes");
var pageNotFound_1 = require("./pageNotFound");
var dynamicPage_1 = require("./dynamicPage");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, routes_1.AppModuleRoutes, contactModule_1.ContactModule],
        declarations: [app_1.App, home_1.HomePage, pageNotFound_1.PageNotFound, dynamicPage_1.DynamicPage, dynamicPage_1.Option1, dynamicPage_1.Option2],
        providers: [],
        entryComponents: [dynamicPage_1.Option1, dynamicPage_1.Option2],
        bootstrap: [app_1.App]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=appModule.js.map