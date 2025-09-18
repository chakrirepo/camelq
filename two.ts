import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `<h2>{{ title }}</h2>`
})
export class MessageComponent {
  title = 'Welcome to Angular Property Binding';
}
