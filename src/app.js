"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AngularFooAppComponent = (function () {
    function AngularFooAppComponent() {
    }
    return AngularFooAppComponent;
}());
AngularFooAppComponent = __decorate([
    core_2.Component({
        selector: 'angularfoo-app',
        template: '<h1>Angular Foo</h1>'
    })
], AngularFooAppComponent);
var AngularFooAppModule = (function () {
    function AngularFooAppModule() {
    }
    return AngularFooAppModule;
}());
AngularFooAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AngularFooAppComponent],
        bootstrap: [AngularFooAppComponent]
    })
], AngularFooAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AngularFooAppModule);
//# sourceMappingURL=app.js.map