import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ContactList } from "./contactList";
import { ContactEdit } from "./contactEdit";
import { Contacts } from "./contacts";
import { ContactActivator } from "./contactActivator";

const ContactRoutes: Routes = [

    {
        path: "contacts",
        component: Contacts,
        canActivate: [ContactActivator],
        canDeactivate: [ContactActivator],
        children: [
            { path: "", component: ContactList },
            { path: ":id", component: ContactEdit }
        ]
    }
];


export const ContactRouting: ModuleWithProviders = RouterModule.forChild(ContactRoutes);