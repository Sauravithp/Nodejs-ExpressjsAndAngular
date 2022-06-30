import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GameComponent,
    GamesComponent,
    DeleteGameComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
         path:"",
         component: HomeComponent
    },
  {
    path:"game/:gameId",
    component: GameComponent
  },{
    path:"games",
    component: GamesComponent
  },{
    path:"delete/game/:gameId",
    component: DeleteGameComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
