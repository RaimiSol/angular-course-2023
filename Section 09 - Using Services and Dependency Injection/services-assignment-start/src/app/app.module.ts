import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ActiveUsersComponent } from "./users/active-users/active-users.component";
import { InactiveUsersComponent } from "./users/inactive-users/inactive-users.component";
import { UsersComponent } from "./users/users.component";
import { UsersService } from "./users.service";
import { CounterService } from "./counter.service";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UsersService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
