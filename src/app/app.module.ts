import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationsComponent } from './locations/locations.component';
import { WeatherDisplayCardComponent } from './weather-display-cards/weather-display-card.component';
import { WeatherService } from './services/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { WeatherIconPipe } from './services/weathericon.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LocationsComponent, WeatherDisplayCardComponent, ForecastComponent, WeatherIconPipe ],
  bootstrap:    [ AppComponent ],
  providers: [
    WeatherService,
    HttpClient,
  ],
})
export class AppModule { }
