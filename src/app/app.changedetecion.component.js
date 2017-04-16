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
var app_person_model_1 = require("./app.person.model");
var AppChangeDetecionComponent = (function () {
    function AppChangeDetecionComponent() {
        this.person = new app_person_model_1.Person("Deep", "Gautam");
    }
    AppChangeDetecionComponent.prototype.OnChangePersonName = function () {
        this.person.firstName = "Angular 2 with";
        this.person.lastName = "Deep Gautam";
    };
    AppChangeDetecionComponent.prototype.OnChangePersonObject = function () {
        this.person = new app_person_model_1.Person("Deep", "Gautam -work on excpetion which you are able to see on console.");
    };
    AppChangeDetecionComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'changedetecion',
            template: "<h2>First Name:</h2> <h3>{{person.firstName}} </h3> <hr> <h2>Last Name:</h2> <h3>{{person.lastName}} </h3> <hr> \n    <button type='button' (click)='OnChangePersonName()'>Change Person Name</button>\n    <button type='button' (click)='OnChangePersonObject()'>Change Person Object</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppChangeDetecionComponent);
    return AppChangeDetecionComponent;
}());
exports.AppChangeDetecionComponent = AppChangeDetecionComponent;
//# sourceMappingURL=app.changedetecion.component.js.map