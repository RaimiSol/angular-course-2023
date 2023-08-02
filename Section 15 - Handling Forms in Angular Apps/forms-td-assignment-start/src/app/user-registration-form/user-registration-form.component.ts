import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {
  subscriptionTypeDefault = "advanced";
  @ViewChild('userRegistrationForm') userRegistrationForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userRegistrationForm.form.value);
  }

  isEmailInvalid(){
    const emailControl = <FormControl>this.userRegistrationForm.form.get('email');
    return emailControl.invalid && emailControl.touched;
  }
}
