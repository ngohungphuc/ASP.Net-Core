import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shorten"
})
export class Shorten implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        var maxSize: number = 10;
        if (args && args.length > 0) {
            maxSize = parseInt(args[0], 10);
        }
        if (value && value.length > maxSize) {
            return value.substr(0, maxSize) + "...";
        }
        return value;
    }
}