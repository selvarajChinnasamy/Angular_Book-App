"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.username = '';
        this.password = '';
        this.isUserLoggedIn = false;
    }
    DataService.prototype.setUserLoggedIn = function (prod) {
        var _this = this;
        console.log(prod);
        this.username = prod.username;
        this.password = prod.password;
        this.isUserLoggedIn = true;
        return this.http.post("/api/checklogin", prod).map(function (result) { return _this.result1 = result.json(); });
    };
    DataService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    DataService.prototype.getUserName = function () {
        return this.username;
    };
    DataService.prototype.getUserbooks = function () {
        var _this = this;
        console.log("username=" + this.username);
        return this.http.get("/api/getbooks/" + this.username)
            .map(function (result) { return _this.books = result.json(); });
    };
    DataService.prototype.postDataadd = function (prod) {
        console.log('Add  Product');
        console.log(prod);
        return this.http.post("/api/adduser", prod).subscribe();
    };
    DataService.prototype.postbookData = function (prod) {
        var _this = this;
        console.log('Add  Product');
        console.log(prod);
        return this.http.post("/api/addbook", prod)
            .map(function (result) { return _this.books = result.json(); });
    };
    DataService.prototype.deletebook = function (prod) {
        return this.http.post("/api/deletebook", prod).subscribe();
    };
    DataService.prototype.logout = function () {
        this.isUserLoggedIn = false;
    };
    return DataService;
}());
DataService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DataService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map