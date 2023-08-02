import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ["./username.component.css"],
})
export class UsernameComponent implements OnInit {
  @Input() username = "";
  get isResetDisabled(): boolean {
    return this.username === "";
  }
  onReset() {
    this.username = "";
  }

  constructor() {}

  ngOnInit(): void {}
}
