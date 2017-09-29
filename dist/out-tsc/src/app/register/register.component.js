"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../data.service");
var RegisterComponent = (function () {
    function RegisterComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.addItem = {
            name: 'admin',
            username: 'admin',
            password: 'admin',
        };
        this.titleAlert = 'This field is required';
        this.rForm = fb.group({
            'name': [null, forms_1.Validators.required],
            'username': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(500)])],
            'validate': ''
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
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
    RegisterComponent.prototype.addPost = function (post) {
        this.addItem.name = post.name;
        this.addItem.username = post.username;
        this.addItem.password = post.password;
        this.dataService.postDataadd(this.addItem);
        this.rForm.reset();
    };
    return RegisterComponent;
}());
RegisterComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            },] },
];
/** @nocollapse */
RegisterComponent.ctorParameters = function () { return [
    { type: forms_1.FormBuilder, },
    { type: data_service_1.DataService, },
]; };
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map