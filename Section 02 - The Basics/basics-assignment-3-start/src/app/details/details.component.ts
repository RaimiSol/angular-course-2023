import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isHidden = false;
  buttonClicks: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.isHidden = !this.isHidden;
    this.onButtonClick();
  }

  onButtonClick() {
    this.buttonClicks.push(this.buttonClicks.length);
  }

  detailsStyle(clickId: number): {[p: string]: any} {
    const customStyle = {
      backgroundColor: 'white',
      color: 'black'
    };
    if (clickId >= 5) {
      customStyle.backgroundColor = 'blue';
      customStyle.color = 'white';
    }
    return customStyle;
  }

}
