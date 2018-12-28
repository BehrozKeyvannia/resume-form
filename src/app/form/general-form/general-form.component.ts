import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
// export class ErrorMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && isSubmitted && control.invalid);
//   }
// }

@Component({
  selector: 'general-form-component',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {

  constructor() { }

  generalFormGroup = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      telephone: new FormControl(''),
      email: new FormControl(''),
      linkedin: new FormControl(''),
      summary: new FormControl(''),
  });

  // matcher = new ErrorMatcher();

  ngOnInit() {
  }

}
