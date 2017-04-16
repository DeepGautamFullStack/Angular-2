"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_callwebapi_services_1 = require("./app.callwebapi.services");
var AppDateTimeCompoent = (function () {
    function AppDateTimeCompoent(_datetimeservice) {
        this._datetimeservice = _datetimeservice;
        this._datetimeservice = _datetimeservice;
    }
    AppDateTimeCompoent.prototype.CallHttpService = function () {
        var _this = this;
        this.currentDate = this._datetimeservice.getDateTime()
            .subscribe(function (p) { return _this.currentDate = p.date; }, function (p) { return _this.currentTime = p.time; });
        this.currentTime = this._datetimeservice.getDateTime()
            .subscribe(function (p) { return _this.currentTime = p.time; });
    };
    AppDateTimeCompoent = __decorate([
        core_1.Component({
            selector: "datetime",
            template: "<h1> Hello Guys , Here I am consuming the \n        http service (http://date.jsontest.com/) to get the date and time from http services.\n        <hr>\n         <button type='button' (click)='CallHttpService()'>Call  Http Service to get date time</button>\n        </h1>\n        <h2>Date is {{currentDate}} and time is {{currentTime}}\n        ",
            providers: [app_callwebapi_services_1.DateTimeHttpService]
        }), 
        __metadata('design:paramtypes', [app_callwebapi_services_1.DateTimeHttpService])
    ], AppDateTimeCompoent);
    return AppDateTimeCompoent;
}());
exports.AppDateTimeCompoent = AppDateTimeCompoent;
//# sourceMappingURL=app.datetime.component.js.map