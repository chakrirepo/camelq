import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <input [(ngModel)]="name" placeholder="Enter name">
    <p>Hello, {{ name }}</p>
  `
})
export class BindingComponent {
  name = '';
}
