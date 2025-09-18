import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  template: `
    <button (click)="toggle()">Toggle</button>
    <p *ngIf="isVisible">This text is visible!</p>
  `
})
export class ConditionComponent {
  isVisible = true;
  toggle() { this.isVisible = !this.isVisible; }
}
