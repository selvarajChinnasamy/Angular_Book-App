"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var AuthguardGuard = (function () {
    function AuthguardGuard(dataService) {
        this.dataService = dataService;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.dataService.getUserLoggedIn();
    };
    return AuthguardGuard;
}());
AuthguardGuard.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthguardGuard.ctorParameters = function () { return [
    { type: data_service_1.DataService, },
]; };
exports.AuthguardGuard = AuthguardGuard;
//# sourceMappingURL=authguard.guard.js.map