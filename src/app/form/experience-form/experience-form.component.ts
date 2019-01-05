import { FormService } from './../form.service';
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
  selector: 'experience-form-component',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})


export class ExperienceFormComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  experiences: object[] = [];

  experienceFormGroup = new FormGroup({
    clientName: new FormControl(''),
    title: new FormControl(''),
    toDate: new FormControl(_moment()),
    fromDate: new FormControl(_moment()),
    description: new FormControl(''),
  });

  ngOnInit() {
  }

  add(){
    this.experiences.push({
        ...this.experienceFormGroup.value,
        key: this.experiences.length
    });
    this.formService.updateExperiences(this.experiences);
    this.experienceFormGroup.reset();
  }

  remove(key: string){
    remove(this.experiences, element => element.key === key);
  }

  toYearHandler(normalizedYear: Moment) {
    const ctrl = this.experienceFormGroup.controls.toDate.value;
    ctrl.year(normalizedYear.year());
    this.experienceFormGroup.controls.toDate.setValue(ctrl);
  }

  fromYearHandler(normalizedYear: Moment) {
    const ctrl = this.experienceFormGroup.controls.fromDate.value;
    ctrl.year(normalizedYear.year());
    this.experienceFormGroup.controls.fromDate.setValue(ctrl);
  }

  toMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>, ) {
    const ctrl = this.experienceFormGroup.controls.toDate.value;
    ctrl.month(normlizedMonth.month());
    this.experienceFormGroup.controls.toDate.setValue(ctrl);
    datepicker.close();
  }

  fromMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>, ) {
    const ctrl = this.experienceFormGroup.controls.fromDate.value;
    ctrl.month(normlizedMonth.month());
    this.experienceFormGroup.controls.fromDate.setValue(ctrl);
    datepicker.close();
  }


}
