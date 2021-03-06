import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { CalculatorService } from './services/calculator.service';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodService } from './services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BeersComponent } from './components/beers/beers/beers.component';
import { BeersService } from './services/beers.service';
import { BeerCardComponent } from './components/beers/beer-card/beer-card.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AbvPipe } from './pipes/abv.pipe';
import { ShowApodComponent } from './components/apod/show-apod/show-apod.component';
import { DateApodComponent } from './components/apod/date-apod/date-apod.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormComponent } from './components/form/form/form.component';
import { ReactiveFormComponent } from './components/form/reactive-form/reactive-form.component';
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { TrivialCardComponent } from './components/trivial/trivial-card/trivial-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
    ApodComponent,
    BeersComponent,
    BeerCardComponent,
    AbvPipe,
    ShowApodComponent,
    DateApodComponent,
    PageNotFoundComponent,
    FormComponent,
    ReactiveFormComponent,
    TrivialComponent,
    TrivialCardComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule, 
    HttpClientModule, 
    YouTubePlayerModule, 
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService, 
    CalculatorService, 
    ApodService, 
    BeersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
