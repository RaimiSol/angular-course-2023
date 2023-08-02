import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenEvents: number[] = [];
  oddEvents: number[] = [];
  onEvent(eventId:number) {
    let isEven = (eventId % 2 ) == 0;
    if (isEven){
      this.evenEvents.push(eventId);
    }else {
      this.oddEvents.push(eventId);
    }

  }
}
