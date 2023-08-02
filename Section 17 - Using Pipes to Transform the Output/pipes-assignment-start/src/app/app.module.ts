import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortByValuePipe } from './sort-by-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortByValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
