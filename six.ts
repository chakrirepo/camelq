import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">{{ fruit }}</li>
    </ul>
  `
})
export class ListComponent {
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
}
