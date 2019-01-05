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

  ngOnInit() {

  }

  createJsonFile() {
    this.formService.saveJsonFile();
  }

}
