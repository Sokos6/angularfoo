import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'angularfoo-app',
	template: '<h1>Angular Foo</h1>'
})
class AngularFooAppComponent {}

@NgModule({
	imports: [BrowserModule],
	declarations: [AngularFooAppComponent],
	bootstrap: [AngularFooAppComponent]
})
class AngularFooAppModule {}

platformBrowserDynamic().bootstrapModule(AngularFooAppModule);