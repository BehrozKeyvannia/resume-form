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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { ReferencesFormComponent } from './form/references-form/references-form.component';
import { DoneComponent } from './form/done/done.component';
import { FormService } from './form/form.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GeneralFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    MiscFormComponent,
    ReferencesFormComponent,
    DoneComponent
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
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
