import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { get } from 'lodash';


@Injectable({
  providedIn: 'root'
})

export class FormService {

  formData = {
    general: {},
    educations: [],
    experiences: [],
    misc: '',
    references: []
  };

  constructor() { }

  saveJsonFile(){
    let data = new Blob([JSON.stringify(this.formData, null, 2)], {type: "text/plain;charset=utf-8"});
    saveAs(data, `${get(this.formData, 'general.name') || 'person'}.json`);
  }

  updateGeneral(general: object) {
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


}
