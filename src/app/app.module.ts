import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import {FormsModule} from '@angular/forms';

import { HeroesService } from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
