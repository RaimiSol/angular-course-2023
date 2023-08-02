import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
/*
<!--
          Create a Form with the following Controls and Validators
          1) Project Name (should not be empty)
          2) Mail (should not be a empty and a valid email)
          3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
          4) Submit Button

          Add your own Validator which doesn't allow "Test" as a Project Name

          Also implement that Validator as an async Validator (replace the other one)

          Upon submitting the form, simply print the value to the console
      -->
 */
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm = new FormGroup(
    {
      name: new FormControl(null, [Validators.required], this.asyncProjectNameValidator),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    }
  );
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  projectNameValidator(nameControl: FormControl): ValidationErrors | null {
    if (nameControl.value === 'Test') {
      return {
        forbiddenName: true
      };
    }
    return null;
  }
  asyncProjectNameValidator(nameControl: FormControl): Promise<ValidationErrors> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (nameControl.value === 'Test') {
          resolve({
            forbiddenName: true
          });
        }
        resolve(null);
      }, 2000);
    });
  }
}
