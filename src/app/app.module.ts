import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StudentCreateComponent } from './student/student-create/student-create.component';
import {StudentService} from "./service/student.service";
import {AppRoutingModuleModule} from "./app-routing-module.module";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModuleModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
