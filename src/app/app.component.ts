import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
template: `
<div class="container">
  <app-layout></app-layout>
      <div class="m-t-1">
      <router-outlet></router-outlet>
   </div>
 </div>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agile-automation';
}

