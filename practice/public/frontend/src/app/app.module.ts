import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DeleteComponent } from './delete/delete.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DeleteComponent,
    GamesComponent,
    GameComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([{
      path: "",
      component: HomeComponent
    },{
      path:"games",
      component:GamesComponent
    },{
      path:"game/:gameId",
      component:GameComponent
    },{
      path:"delete/:gameId",
      component: DeleteComponent
    },{
      path:"search/:title",
      component: SearchComponent
    }]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
