import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';
import { remove } from 'lodash';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as _moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'education-form-component',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EducationFormComponent implements OnInit {

  constructor() { }

  educations: object[] = [];

  educationFormGroup = new FormGroup({
    name: new FormControl(''),
    toDate: new FormControl(_moment()),
    fromDate: new FormControl(_moment()),
    description: new FormControl(''),
  });

  ngOnInit() {

  }

  add(){
    this.educations.push({
        ...this.educationFormGroup.value,
        key: this.educations.length
    });
    this.educationFormGroup.reset();
  }

  remove(key: string){
    remove(this.educations, element => element.key === key);
  }

  toYearHandler(normalizedYear: Moment) {
    const ctrl = this.educationFormGroup.controls.toDate.value;
    ctrl.year(normalizedYear.year());
    this.educationFormGroup.controls.toDate.setValue(ctrl);
  }

  fromYearHandler(normalizedYear: Moment) {
    const ctrl = this.educationFormGroup.controls.fromDate.value;
    ctrl.year(normalizedYear.year());
    this.educationFormGroup.controls.fromDate.setValue(ctrl);
  }

  toMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>, ) {
    const ctrl = this.educationFormGroup.controls.toDate.value;
    ctrl.month(normlizedMonth.month());
    this.educationFormGroup.controls.toDate.setValue(ctrl);
    datepicker.close();
  }

  fromMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>, ) {
    const ctrl = this.educationFormGroup.controls.fromDate.value;
    ctrl.month(normlizedMonth.month());
    this.educationFormGroup.controls.fromDate.setValue(ctrl);
    datepicker.close();
  }

}
