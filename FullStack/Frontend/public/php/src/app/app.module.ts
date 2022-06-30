import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GameComponent,
    GamesComponent,
    DeleteGameComponent,
    StarRatingComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
  },{
    path:"register",
    component: RegisterComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
