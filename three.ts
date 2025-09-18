import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  template: `
    <button (click)="showMessage()">Click Me</button>
    <p>{{ message }}</p>
  `
})
export class ClickComponent {
  message = '';
  showMessage() {
    this.message = 'Button was clicked!';
  }
}
