import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { DeletStudentComponent } from './delet-student/delet-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    DeletStudentComponent,
    UpdateStudentComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:"",
      component: HomeComponent
    },{
      path:"student/:studentId",
      component: StudentComponent
    },{
      path:"students",
      component: StudentsComponent
    },
    {
      path:"delete/student/:studentId",
      component: DeletStudentComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
