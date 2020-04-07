import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'misc-form-component',
  templateUrl: './misc-form.component.html',
  styleUrls: ['./misc-form.component.scss']
})
export class MiscFormComponent implements OnInit {

  miscFormGroup = new FormGroup({
    misc: new FormControl('')
  });

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
    this.miscFormGroup.valueChanges.subscribe(misc => this.formService.updateMisc(misc));
    this.formService.formDataSubject.subscribe(
      update => { 
        if (update.misc && update.misc.misc) {
          this.miscFormGroup.patchValue(update.misc)
        }
      }
    )
  }


}
