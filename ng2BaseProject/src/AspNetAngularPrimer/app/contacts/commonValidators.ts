import { FormControl } from "@angular/forms";
import {ContactService} from "./contactService";

export class CommonValidators {
    static dropDownValid(control: FormControl): { [key: string]: any } {
        if (parseInt(control.value, 10) > 0) {
            return undefined;
        } else {
            return { "dropDownValid": parseInt(control.value, 10) > 0 };
        }

    }

    contactService: ContactService;
    id: number = 0;
    nameExists = (control: FormControl): Promise<{ [key: string]: any }> => {
        return this.contactService.dupe(control.value, this.id);
    }

}