import { Component, Input, Output, ElementRef } from '@angular/core';



@Component({
  selector: 'app-paso',
  templateUrl: './paso.component.html',
  styleUrls: ['./paso.component.css']
})
export class PasoComponent {

  itemObjectsLeft: any[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' }
  ];
 
  itemObjectsRight: any[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' }
  ];
  
}
