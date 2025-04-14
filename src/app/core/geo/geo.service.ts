import { inject, Injectable } from '@angular/core';
import { GeoApiService, GeoResponse } from './geo-api.service';
import { map, Observable } from 'rxjs';
import { WeatherLocation } from './geo.model';
import { Guid } from 'js-guid';

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
            // weather geo api does not provide any id, so creating one
            id: Guid.newGuid().toString(),
            name: responseItem.name,
            caption: 'localized caption',
            fullName: `${responseItem.name} (${responseItem.country}, ${responseItem.state})`,
            coords: [ responseItem.lat, responseItem.lon ],
            countryCode: responseItem.country,
            state: responseItem.state,
        }
    }
}
