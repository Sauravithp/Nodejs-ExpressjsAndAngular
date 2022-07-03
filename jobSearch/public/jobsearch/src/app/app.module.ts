import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddJobComponent } from './add-job/add-job.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    SearchJobComponent,
    JobsComponent,
    JobComponent,
    HomeComponent,
    NavigationComponent,
    DeleteComponent,
    UpdateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:"",
      component: HomeComponent
    },{
      path:"jobs",
      component:JobsComponent
    },{
      path:"job/:id",
      component: JobComponent
    },{
      path:"add",
      component:AddJobComponent
    },{
      path:"delete/:id",
      component:DeleteComponent
    },{
      path:"update/:id",
      component:UpdateComponent
    },{
      path:"search/:title",
      component:SearchJobComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
