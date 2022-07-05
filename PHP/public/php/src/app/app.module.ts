import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SeriesComponent } from './series/series.component';
import { DeleteSeriesComponent } from './delete-series/delete-series.component';
import { UpdateSeriesComponent } from './update-series/update-series.component';
import { AddSeriesComponent } from './add-series/add-series.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DeleteReviewComponent } from './delete-review/delete-review.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { SearchComponent } from './search/search.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SeriesComponent,
    DeleteSeriesComponent,
    UpdateSeriesComponent,
    AddSeriesComponent,
    AddReviewComponent,
    DeleteReviewComponent,
    UpdateReviewComponent,
    SearchComponent,
    SeriesDetailComponent,
    ReviewDetailComponent,
    ReviewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{
      path:"",
      component:HomeComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
