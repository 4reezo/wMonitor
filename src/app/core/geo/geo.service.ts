import { inject, Injectable } from '@angular/core';
import { GeoApiService, GeoResponse } from './geo-api.service';
import { map, Observable } from 'rxjs';
import { WeatherLocation } from './geo.model';

@Injectable({ providedIn: 'root' })
export class GeoService {
    private apiService = inject(GeoApiService);

    getLocationByName(name: string): Observable<WeatherLocation[]> {
        return this.apiService.directSearch(name).pipe(
            map(res => res.map(this.toWeatherLocation)),
        );
    }

    toWeatherLocation(responseItem: GeoResponse): WeatherLocation {
        return {
            // not an id technically, but at least something to differentiate
            id: `${responseItem.country}-${responseItem.state}-${responseItem.name}`.toLowerCase(),
            name: responseItem.name,
            caption: 'localized caption',
            fullName: `${responseItem.name} (${responseItem.country}, ${responseItem.state})`,
            coords: [ responseItem.lat, responseItem.lon ],
            countryCode: responseItem.country,
            state: responseItem.state,
        }
    }
}
