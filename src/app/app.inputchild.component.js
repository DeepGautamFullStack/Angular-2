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
var AppInputChildComponent = (function () {
    function AppInputChildComponent() {
        this.nameChild = "Deep";
    }
    AppInputChildComponent.prototype.handleParentEvent = function (args) {
        this.outcome = args;
        alert("I am alert from child component. My resposibilty is to handle parent component event and the I received : " + args + "  from parent ");
    };
    AppInputChildComponent = __decorate([
        core_1.Component({
            selector: 'inputchild',
            template: " <div class=\"normalDiv\">\n    <parentreciever [nameParent]=\"nameChild\" (parentEvent)=\"handleParentEvent($event)\" ></parentreciever>\n\n  <h2>This section is part of child component:\n    Value of Name recieved from parent to child component \n    is: {{ outcome }}\n  </h2>\n    </div>\n    ",
            styles: ["\n    .normalDiv {\n      display: block;\n      text-align: center;\n      padding: 25px;\n      background: #f5f5f5;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppInputChildComponent);
    return AppInputChildComponent;
}());
exports.AppInputChildComponent = AppInputChildComponent;
//# sourceMappingURL=app.inputchild.component.js.map