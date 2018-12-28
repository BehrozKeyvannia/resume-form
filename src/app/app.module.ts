import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { FormComponent } from './form/form.component';
import { GeneralFormComponent } from './form/general-form/general-form.component';
import { EducationFormComponent } from './form/education-form/education-form.component';
import { ExperienceFormComponent } from './form/experience-form/experience-form.component';
import { MiscFormComponent } from './form/misc-form/misc-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GeneralFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    MiscFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
