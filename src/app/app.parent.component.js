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
var AppParentComponent = (function () {
    function AppParentComponent() {
        this.nameParent = "";
        this.parentEvent = new core_1.EventEmitter();
    }
    AppParentComponent.prototype.changetoAtul = function () {
        this.nameParent = "Atul";
        this.parentEvent.emit("You changed name to :" + this.nameParent);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppParentComponent.prototype, "nameParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AppParentComponent.prototype, "parentEvent", void 0);
    AppParentComponent = __decorate([
        core_1.Component({
            selector: 'parentreciever',
            template: "<h3>This intial value of name is coming from child component as in form of input:</h3>\n\n    <input type=\"text\" [value]=\"nameParent\">\n\n    <button (click)=\"changetoAtul()\">\n        Change Name to Atul\n      </button> \n     ",
            styles: ["\n    .counter {\n      position: relative;\n    }\n    input {\n      border: 0;\n      border-radius: 4px;\n      height: 30px;\n      max-width: 150px;\n      text-align: center;\n    }\n    button {\n      outline: 0;\n      cursor: pointer;\n      height: 30px;\n      border: 0;\n      border-radius: 3px;\n      background: #4CAF50;\n      color: white;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppParentComponent);
    return AppParentComponent;
}());
exports.AppParentComponent = AppParentComponent;
//# sourceMappingURL=app.parent.component.js.map