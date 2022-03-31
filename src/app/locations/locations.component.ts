import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeatherData } from '../services/weather';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  zipCode = "";
  weathercards: IWeatherData[] = [];
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.refreshCards();
  }

  refreshCards()
  {
    let zipCodesList: string[];
    zipCodesList = JSON.parse(localStorage.getItem("zipCodesList"));
    if(zipCodesList)
    {
      this.weathercards = this.weatherService.getAllWeatherData(zipCodesList);
    }
  }

  onSubmitLocation()
  {
    let zipCodesList: string[];
    zipCodesList = JSON.parse(localStorage.getItem("zipCodesList"));
    if(zipCodesList)
    {
      zipCodesList.push(this.zipCode);
    }
    else
    {
      zipCodesList = [this.zipCode];
    }
    localStorage.setItem("zipCodesList", JSON.stringify(zipCodesList));


    // Getting the weather data for the new location and adding it to the local array
    this.weatherService.getWeatherDataByZipCode(this.zipCode).subscribe({
      next: (v) => {
        v.zip = this.zipCode;
        v.index = zipCodesList.length - 1;
        this.weathercards.push(v);
        this.zipCode = "";
      },
      error: (e) => console.error(e)
    });

    
  }

  GetDeleteIndex(index){  
    let zipCodesList: string[] = JSON.parse(localStorage.getItem("zipCodesList"));

    zipCodesList.splice(index, 1);
    localStorage.setItem("zipCodesList", JSON.stringify(zipCodesList));

    this.weathercards.splice(index,1); // The index of the card to delete is the same in the local array

    this.refreshCards(); // Refreshing the cards since one got deleted

 }  

}
