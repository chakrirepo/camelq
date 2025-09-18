import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-event',
  template: `<button (click)="sendData()">Send Data</button>`
})
export class ChildEventComponent {
  @Output() dataEvent = new EventEmitter<string>();
  sendData() {
    this.dataEvent.emit('Hello Parent!');
  }
}
