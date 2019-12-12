import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'done-component',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  idExists: boolean;

  ngOnInit() {
    this.formService.formDataSubject.subscribe(
      formData => {
        this.idExists = formData.id ? true : false;
      }
    )
  }

  editProfile() {
    this.formService.editResume().subscribe(
      success => {
        console.warn("success: " , success);
        window.location.reload();
      },
      error => {
        console.warn("error: " , error);
      }
    );
  }

  deleteProfile() {
    this.formService.deleteResume().subscribe(
      success => {
        console.warn("success: " , success);
        window.location.reload();
      },
      error => {
        console.warn("error: " , error);
      }
    );
  }

  createProfile() {
    this.formService.createResume().subscribe(
      (response: any) => {
        console.warn("created: ", response);
        this.idExists = response.id ? true : false;
      }
    )
  }
}
