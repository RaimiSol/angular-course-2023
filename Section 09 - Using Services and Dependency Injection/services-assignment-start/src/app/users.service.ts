import { User } from "./users/user";
import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private counterService: CounterService) {}
  setToActive(userIdx: number) {
    let [inactiveUser] = this.inactiveUsers.splice(userIdx, 1);
    this.activeUsers.push(inactiveUser);
    this.counterService.onToActive();
  }
  setToInactive(userIdx: number) {
    let [activeUser] = this.activeUsers.splice(userIdx, 1);
    this.inactiveUsers.push(activeUser);

    this.counterService.onToInactive();
  }
}
