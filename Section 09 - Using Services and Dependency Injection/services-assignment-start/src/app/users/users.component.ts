import { Component, OnInit } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  toInactiveCount: number;
  toActiveCount: number;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.toActiveCount = this.counterService.toActiveCount;
    this.toInactiveCount = this.counterService.toInactiveCount;
  }
}
