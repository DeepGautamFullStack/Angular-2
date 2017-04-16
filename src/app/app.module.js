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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_child_component_1 = require('./app.child.component');
var app_first_component_1 = require('./app.first.component');
var app_changedetecion_component_1 = require('./app.changedetecion.component');
var app_datetime_component_1 = require('./app.datetime.component');
var registration_from_component_1 = require('./registration-from.component');
var app_inputchild_component_1 = require('./app.inputchild.component');
var app_parent_component_1 = require('./app.parent.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, app_child_component_1.ChildComponent, app_first_component_1.AppFirstCompoent, app_changedetecion_component_1.AppChangeDetecionComponent, app_datetime_component_1.AppDateTimeCompoent, registration_from_component_1.RegistrationFormComponent, app_inputchild_component_1.AppInputChildComponent, app_parent_component_1.AppParentComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map