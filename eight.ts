import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Message from parent: {{ parentMsg }}</p>`
})
export class ChildComponent {
  @Input() parentMsg = '';
}
