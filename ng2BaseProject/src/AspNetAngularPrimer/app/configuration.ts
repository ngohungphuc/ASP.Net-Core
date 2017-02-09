import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    config: IConfig;
    constructor() {
        this.config = (<any>window).myAngularApp.config;
    }
}

export interface IConfig {
    rootUrl: string;
}