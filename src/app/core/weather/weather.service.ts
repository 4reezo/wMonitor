import { inject, Injectable } from '@angular/core';
import { WeatherApiService, WeatherResponse } from './weather-api.service';
import { Weather } from './weather.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    private apiService = inject(WeatherApiService);

    getWeatherByCoords(coords: [ number, number ]) {
        return this.apiService.getWeather(...coords).pipe(
            map(res => this.toWeather(res)),
        );
    }

    private toWeather(responseItem: WeatherResponse): Weather {
        return {
            main: responseItem.weather.main,
            description: responseItem.weather.description,
            temp: {
                c: [
                    responseItem.main.temp,
                    responseItem.main.temp_min,
                    responseItem.main.temp_max,
                ],
                f: [
                    this.toFahrenheit(responseItem.main.temp),
                    this.toFahrenheit(responseItem.main.temp_min),
                    this.toFahrenheit(responseItem.main.temp_max),
                ],
            },
            wind: [ responseItem.wind.speed, responseItem.wind.deg ],
        };
    }

    private toFahrenheit(cel: number): number {
        return (cel * 9 / 5) + 32;
    }
}
