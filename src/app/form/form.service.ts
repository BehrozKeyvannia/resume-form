import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { get } from 'lodash';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { cloneDeep } from 'lodash';

export interface General {
  firstname: string;
  lastname: string;
  age: string;
  telephone: string;
  email: string;
  linkedin: string;
  summary: string;
}
@Injectable({
  providedIn: 'root'
})

export class FormService {

  private readonly api: string = 'http://localhost:8000/';

  formData = {
    general: {
      firstname: '',
      lastname: '',
      age: '',
      telephone: '',
      email: '',
      linkedin: '',
      summary: ''
    },
    educations: [],
    experiences: [],
    misc: '',
    references: []
  };

  formDataSubject: Rx.BehaviorSubject<any>;
  currentId: string = '';

  constructor(
    private http: HttpClient
  ) {
    this.formDataSubject = new Rx.BehaviorSubject(this.formData);
  }

  saveJsonFile() {
    let data = new Blob([JSON.stringify(this.formData, null, 2)], { type: "text/plain;charset=utf-8" });
    saveAs(data, `${get(this.formData, 'general.name') || 'person'}.json`);
  }

  updateForm(formData) {
    this.currentId = formData.id || '';
    this.formData = formData;
    this.formDataSubject.next(formData);
  }

  updateGeneral(general: General) {
    this.formData.general = general;
  }

  updateEducations(educations: Array<object>) {
    this.formData.educations = educations;
  }

  updateExperiences(experiences: Array<object>) {
    this.formData.experiences = experiences;
  }

  updateMisc(misc: string) {
    this.formData.misc = misc;
  }

  updateReferences(references: Array<object>) {
    this.formData.references = references;
  }

  reset() {
    this.formData = cloneDeep({
      general: {
        firstname: '',
        lastname: '',
        age: '',
        telephone: '',
        email: '',
        linkedin: '',
        summary: ''
      },
      educations: [],
      experiences: [],
      misc: '',
      references: []
    });

    this.updateForm(cloneDeep({
      general: {
        firstname: '',
        lastname: '',
        age: '',
        telephone: '',
        email: '',
        linkedin: '',
        summary: ''
      },
      educations: [],
      experiences: [],
      misc: '',
      references: []
    }));
  }

  createResume() {
    return this.http.post(this.api + 'resume/create', this.formData);
  }

  editResume() {
    return this.http.post(this.api + `resume/edit/${this.currentId}`, this.formData);
  }

  deleteResume() {
    return this.http.delete(this.api + `resume/delete/${this.currentId}`);
  }

  getAll() {
    return this.http.get(this.api + 'resume/get-all');
  }


}
