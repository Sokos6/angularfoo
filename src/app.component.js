"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Angular - Event Binding';
    }
    AppComponent.prototype.showMessage = function (onKeyPressEvent) {
        this.message = onKeyPressEvent.target.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'event-binding-app',
        template: "\n        <h1>{{message}}</h1>\n\t\t<input type=\"text\" [value]=\"message\"(keypress)=\"showMessage()\" />\n        "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map