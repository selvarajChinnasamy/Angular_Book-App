"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../data.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, fb, dataService) {
        this.router = router;
        this.fb = fb;
        this.dataService = dataService;
        this.login = {
            username: '',
            password: '',
        };
        this.status = '';
        this.description = '';
        this.name = '';
        this.titleAlert = 'This field is required';
        this.rForm = fb.group({
            'name': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required],
            'validate': ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('name').setValidators([forms_1.Validators.required, forms_1.Validators.minLength(3)]);
                _this.titleAlert = 'You need to specify at least 3 characters';
            }
            else {
                _this.rForm.get('name').setValidators(forms_1.Validators.required);
            }
            _this.rForm.get('name').updateValueAndValidity();
        });
    };
    LoginComponent.prototype.addPost = function (post) {
        var _this = this;
        console.log(post);
        this.login.username = post.name;
        this.login.password = post.password;
        this.dataService.setUserLoggedIn(this.login).subscribe(function (res) {
            _this.status = res.status;
            console.log("login");
            if (_this.status === 'success') {
                console.log(_this.status);
                _this.router.navigate(['user']);
            }
        });
        this.rForm.reset();
    };
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: router_1.Router, },
    { type: forms_1.FormBuilder, },
    { type: data_service_1.DataService, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map