import {Component, EventEmitter, OnInit, Output} from '@angular/core';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isOn = false;
  @Output('events') eventsEmitter = new EventEmitter<number>();
  eventsCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  async onStart(){
    this.isOn = true;
    while (this.isOn){
      this.eventsCount++;
      this.eventsEmitter.emit(this.eventsCount);
      await sleep(1000);
    }
  }
  onStop(){
    this.isOn = false;
  }

}
