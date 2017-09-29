"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var userportal_component_1 = require("./userportal/userportal.component");
var data_service_1 = require("./data.service");
var authguard_guard_1 = require("./authguard.guard");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    register_component_1.RegisterComponent,
                    login_component_1.LoginComponent,
                    userportal_component_1.UserportalComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'ang4-seo-pre' }),
                    app_routing_module_1.AppRoutingModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    http_1.HttpModule,
                ],
                providers: [data_service_1.DataService, authguard_guard_1.AuthguardGuard],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map