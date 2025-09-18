import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  template: `
    <h3>API Data:</h3>
    <pre>{{ data | json }}</pre>
  `
})
export class ApiComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(response => this.data = response);
  }
}
