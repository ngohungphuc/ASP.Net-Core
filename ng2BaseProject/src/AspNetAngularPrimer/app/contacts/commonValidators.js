"use strict";
var CommonValidators = (function () {
    function CommonValidators() {
        var _this = this;
        this.id = 0;
        this.nameExists = function (control) {
            return _this.contactService.dupe(control.value, _this.id);
        };
    }
    CommonValidators.dropDownValid = function (control) {
        if (parseInt(control.value, 10) > 0) {
            return undefined;
        }
        else {
            return { "dropDownValid": parseInt(control.value, 10) > 0 };
        }
    };
    return CommonValidators;
}());
exports.CommonValidators = CommonValidators;
//# sourceMappingURL=commonValidators.js.map