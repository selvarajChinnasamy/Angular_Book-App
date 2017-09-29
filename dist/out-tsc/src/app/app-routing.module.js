"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var userportal_component_1 = require("./userportal/userportal.component");
var login_component_1 = require("./login/login.component");
var authguard_guard_1 = require("./authguard.guard");
var routes = [
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'user',
        canActivate: [authguard_guard_1.AuthguardGuard],
        component: userportal_component_1.UserportalComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            },] },
];
/** @nocollapse */
AppRoutingModule.ctorParameters = function () { return []; };
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map