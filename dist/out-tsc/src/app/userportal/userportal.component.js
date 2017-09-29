"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../data.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var UserportalComponent = (function () {
    function UserportalComponent(dataService, fb, router) {
        var _this = this;
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.boos = [];
        this.addItem = {
            username: '',
            name: 'admin',
            author: 'admin',
        };
        this.deletItem = {
            username: '',
            name: ''
        };
        this.titleAlert = 'This field is required';
        this.name = this.dataService.getUserName();
        this.dataService.getUserbooks().subscribe(function (res) {
            _this.boos = res;
        });
        this.rForm = fb.group({
            'name': [null, forms_1.Validators.required],
            'author': [null, forms_1.Validators.required],
            'validate': ''
        });
    }
    UserportalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.name === '') {
            this.router.navigate(['/']);
        }
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
    UserportalComponent.prototype.addPost = function (post) {
        var _this = this;
        this.addItem.username = this.name;
        this.addItem.name = post.name;
        this.addItem.author = post.author;
        this.dataService.postbookData(this.addItem).subscribe(function (res) {
            _this.boos.push(res);
        });
        this.rForm.reset();
    };
    UserportalComponent.prototype.deletebook = function (bookname, i) {
        this.deletItem.username = this.name;
        this.deletItem.name = bookname;
        this.dataService.deletebook(this.deletItem);
        this.boos.splice(i, 1);
    };
    UserportalComponent.prototype.logout = function () {
        this.dataService.logout();
        this.router.navigate(['/']);
    };
    return UserportalComponent;
}());
UserportalComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-userportal',
                templateUrl: './userportal.component.html',
                styleUrls: ['./userportal.component.css']
            },] },
];
/** @nocollapse */
UserportalComponent.ctorParameters = function () { return [
    { type: data_service_1.DataService, },
    { type: forms_1.FormBuilder, },
    { type: router_1.Router, },
]; };
exports.UserportalComponent = UserportalComponent;
//# sourceMappingURL=userportal.component.js.map