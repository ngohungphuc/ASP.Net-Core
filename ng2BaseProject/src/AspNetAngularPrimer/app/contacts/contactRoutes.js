"use strict";
var router_1 = require("@angular/router");
var contactList_1 = require("./contactList");
var contactEdit_1 = require("./contactEdit");
var contacts_1 = require("./contacts");
var contactActivator_1 = require("./contactActivator");
var ContactRoutes = [
    {
        path: "contacts",
        component: contacts_1.Contacts,
        canActivate: [contactActivator_1.ContactActivator],
        canDeactivate: [contactActivator_1.ContactActivator],
        children: [
            { path: "", component: contactList_1.ContactList },
            { path: ":id", component: contactEdit_1.ContactEdit }
        ]
    }
];
exports.ContactRouting = router_1.RouterModule.forChild(ContactRoutes);
//# sourceMappingURL=contactRoutes.js.map