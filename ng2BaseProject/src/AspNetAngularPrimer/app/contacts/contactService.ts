import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Configuration } from "../configuration";
import { Http, Response, RequestOptionsArgs, Headers } from "@angular/http";

import Person = App.Models.IPerson;

@Injectable()
export class ContactService {

    contacts: Subject<Person[]>;
    contact: Subject<Person>;
    deletedPerson: Subject<number>;

    private defaultArgs: RequestOptionsArgs;

    constructor(private configuration: Configuration, private http: Http) {
        this.contacts = new Subject<Person[]>();
        this.contact = new Subject<Person>();
        this.deletedPerson = new Subject<number>();
        let defaultHeaders: Headers = new Headers();
        defaultHeaders.append("Content-Type", "application/json");
        this.defaultArgs = { headers: defaultHeaders };
    }

    handleError(error: Response) {
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


    }


    getAll(): void {
        this.http.get(this.configuration.config.rootUrl + "api/persons").subscribe(
            (result: Response) => {
                this.contacts.next(result.json());
            }, this.handleError);
    }

    getOne(personTypeId: number): void {
        this.http.get(this.configuration.config.rootUrl + "api/persons/" + personTypeId)
            .subscribe((result: Response) => {
                this.contact.next(result.json());
            }, this.handleError);
    }

    dupe(lastName: string, id: number): Promise<{ [key: string]: any }> {

        var p = new Promise<{ [key: string]: any }>((resolve, reject) => {
            this.http.get(this.configuration.config.rootUrl + "api/persons/dupe/" + lastName + "/" + id.toString())
                .subscribe((result: Response) => {
                    if (result.json() === true) {
                        resolve({ "dupe": result.json() });
                    }                    else {
                        resolve(undefined);
                    }

                }, (error: any) => { reject(error); });
        });
        return p;
    }

    insert(person: Person): void {
        this.http.post(
            this.configuration.config.rootUrl + "api/persons/",
            JSON.stringify(person),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.contact.next(result.json());
            }, this.handleError);
    }

    update(person: Person): void {
        this.http.put(
            this.configuration.config.rootUrl + "api/persons/",
            JSON.stringify(person),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.contact.next(person);
            }, this.handleError);
    }

    delete(personId: number): void {
        this.http.delete(this.configuration.config.rootUrl + "api/persons/" + personId)
            .subscribe((result: Response) => {
                this.deletedPerson.next(personId);
            }, this.handleError);
    }
}
