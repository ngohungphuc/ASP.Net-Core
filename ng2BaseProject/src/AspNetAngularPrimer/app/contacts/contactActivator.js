"use strict";
var ContactActivator = (function () {
    function ContactActivator() {
    }
    ContactActivator.prototype.canActivate = function (route, state) {
        console.log("canActivate called");
        return true;
    };
    ContactActivator.prototype.canDeactivate = function (component, route, state) {
        console.log("canDeactivate called");
        return true;
    };
    return ContactActivator;
}());
exports.ContactActivator = ContactActivator;
//# sourceMappingURL=contactActivator.js.map