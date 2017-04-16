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
var core_1 = require('@angular/core');
var app_model_user_1 = require('./app.model.user');
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent() {
        this.emails = ['dgautam.hcl@gmail.com', 'deepgautam2008@gmail.com',
            'rakesh@gmail.com', 'atul@gmail.com'];
        this.model = new app_model_user_1.User("Deep", "Gautam", "dgautam.hcl@gmail.com");
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    RegistrationFormComponent.prototype.newUser = function () {
        this.model = new app_model_user_1.User("Rakesh", "Mishra", "rakesh@gmail.com");
    };
    RegistrationFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registration-form',
            templateUrl: './app.registration.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-from.component.js.map