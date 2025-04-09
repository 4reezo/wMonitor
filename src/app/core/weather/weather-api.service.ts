import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';

export interface WeatherResponse {
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[], // not sure why this one is array...
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    },
    wind: {
        speed: number;
        deg: number;
    }
}

@Injectable({ providedIn: 'root' })
export class WeatherApiService {
    private http = inject(HttpClient);
    private urlService = inject(UrlService);

    getWeather(lat: number, lon: number) {
        const url = this.urlService.getWeatherUrl('weather', { lon, lat, units: 'metric' });

        return this.http.get<WeatherResponse>(url);
    }
}
