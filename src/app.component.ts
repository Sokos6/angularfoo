import { Component } from '@angular/core'; 

      @Component({ 
        selector: 'event-binding-app', 
        template: `
        <h1>{{message}}</h1>
		<input type="text" [value]="message"(keypress)="showMessage()" />
        `
      }) 
      export class AppComponent {
      	public message: string = 'Angular - Event Binding';

      	showMessage(onKeyPressEvent) {
      		this.message = onKeyPressEvent.target.value;
      	}
      }