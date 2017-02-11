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
var Subject_1 = require("rxjs/Subject");
var configuration_1 = require("../configuration");
var http_1 = require("@angular/http");
var ContactService = (function () {
    function ContactService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
        this.contacts = new Subject_1.Subject();
        this.contact = new Subject_1.Subject();
        this.deletedPerson = new Subject_1.Subject();
        var defaultHeaders = new http_1.Headers();
        defaultHeaders.append("Content-Type", "application/json");
        this.defaultArgs = { headers: defaultHeaders };
    }
    ContactService.prototype.handleError = function (error) {
        var message = "";
        try {
            var result = JSON.parse(error.text());
            for (var property in result) {
                if (Array.isArray(result[property])) {
                    for (var i = 0; i < result[property].length; i++) {
                        message = message + result[property][i] + "\n";
                    }
                }
            }
        }
        catch (e) {
            message = (error.text() || error.statusText || error.status.toString(10));
        }
        if (!message) {
            message = (error.text() || error.statusText || error.status.toString(10));
        }
        alert(message);
    };
    ContactService.prototype.getAll = function () {
        var _this = this;
        this.http.get(this.configuration.config.rootUrl + "api/persons").subscribe(function (result) {
            _this.contacts.next(result.json());
        }, this.handleError);
    };
    ContactService.prototype.getOne = function (personTypeId) {
        var _this = this;
        this.http.get(this.configuration.config.rootUrl + "api/persons/" + personTypeId)
            .subscribe(function (result) {
            _this.contact.next(result.json());
        }, this.handleError);
    };
    ContactService.prototype.dupe = function (lastName, id) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this.http.get(_this.configuration.config.rootUrl + "api/persons/dupe/" + lastName + "/" + id.toString())
                .subscribe(function (result) {
                if (result.json() === true) {
                    resolve({ "dupe": result.json() });
                }
                else {
                    resolve(undefined);
                }
            }, function (error) { reject(error); });
        });
        return p;
    };
    ContactService.prototype.insert = function (person) {
        var _this = this;
        this.http.post(this.configuration.config.rootUrl + "api/persons/", JSON.stringify(person), this.defaultArgs)
            .subscribe(function (result) {
            _this.contact.next(result.json());
        }, this.handleError);
    };
    ContactService.prototype.update = function (person) {
        var _this = this;
        this.http.put(this.configuration.config.rootUrl + "api/persons/", JSON.stringify(person), this.defaultArgs)
            .subscribe(function (result) {
            _this.contact.next(person);
        }, this.handleError);
    };
    ContactService.prototype.delete = function (personId) {
        var _this = this;
        this.http.delete(this.configuration.config.rootUrl + "api/persons/" + personId)
            .subscribe(function (result) {
            _this.deletedPerson.next(personId);
        }, this.handleError);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [configuration_1.Configuration, http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contactService.js.map