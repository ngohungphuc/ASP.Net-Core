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
var DynamicPage = (function () {
    function DynamicPage(router, resolver, injector) {
        this.router = router;
        this.resolver = resolver;
        this.injector = injector;
    }
    DynamicPage.prototype.ngOnInit = function () {
        if ((new Date().getDate() % 2) === 0) {
            this.resolver.resolveComponentFactory(Option1).create(this.injector, null, this.dynamicComponentTarget.element.nativeElement);
        }
        else {
            this.resolver.resolveComponentFactory(Option1).create(this.injector, null, this.dynamicComponentTarget.element.nativeElement);
        }
    };
    DynamicPage.prototype.back = function () {
        this.router.navigate([""]);
    };
    return DynamicPage;
}());
__decorate([
    core_1.ViewChild("options", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicPage.prototype, "dynamicComponentTarget", void 0);
DynamicPage = __decorate([
    core_1.Component({
        selector: "dynamic-page",
        template: "\n    <h2>Dynamic View</h2>\n    <div #options></div>\n    <button class=\"btn btn-default\" (click)=\"back()\">Home</button>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.ComponentFactoryResolver, core_1.Injector])
], DynamicPage);
exports.DynamicPage = DynamicPage;
var Option1 = (function () {
    function Option1() {
    }
    return Option1;
}());
Option1 = __decorate([
    core_1.Component({
        selector: "options",
        template: "\n    <h3>Loaded on even day</h3>\n"
    })
], Option1);
exports.Option1 = Option1;
var Option2 = (function () {
    function Option2() {
    }
    return Option2;
}());
Option2 = __decorate([
    core_1.Component({
        selector: "options",
        template: "\n  <h3>Loaded on odd day</h3>\n    "
    })
], Option2);
exports.Option2 = Option2;
//# sourceMappingURL=dynamicPage.js.map