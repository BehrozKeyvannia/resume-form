import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import { remove } from 'lodash';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'references-form-component',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  references: object[] = [];
  referenceFormGroup = new FormGroup({
    referenceName: new FormControl(''),
    workplace: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  ngOnInit() {
    this.formService.formDataSubject.subscribe(
      update => this.referenceFormGroup.patchValue(update.educations)
    )
  }

  add(){
    this.references.push({
        ...this.referenceFormGroup.value,
        key: this.references.length
    });
    this.formService.updateReferences(this.references);
    this.referenceFormGroup.reset();
  }

  remove(key: string){
    remove(this.references, element => element.key === key);
  }

}
