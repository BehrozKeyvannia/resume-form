import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

interface Profile {
  data: Array<object>;
}
@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  allProfiles: Array<object> = []

  ngOnInit() {
    this.formService.getAll().subscribe(
      (profiles: Profile) => {
        this.allProfiles = profiles.data;
      });
  }

  profileChanged(event) {
    if(event.value === 'new_profile') {
      this.formService.reset();
    } else {
      let formData = event.value;
      this.formService.updateForm(formData);
    }
  }

}
