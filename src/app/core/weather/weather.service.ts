import { inject, Injectable } from '@angular/core';
import { WeatherApiService, WeatherResponse } from './weather-api.service';
import { Weather, WeatherIconCode } from './weather.model';
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

        console.log(responseItem);
        return {
            main: responseItem.weather[0].main,
            description: responseItem.weather[0].description,
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
            wind: {
                m: [ responseItem.wind.speed, responseItem.wind.deg ],
                i: [ this.toMph(responseItem.wind.speed), responseItem.wind.deg ],
            },
            iconCode: responseItem.weather[0].icon as WeatherIconCode,
        };
    }

    private toFahrenheit(cel: number): number {
        return (cel * 9 / 5) + 32;
    }

    private toMph(speed: number) {
        return speed * 2.237;
    }
}
