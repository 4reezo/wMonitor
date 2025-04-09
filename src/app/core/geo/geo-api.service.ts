import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';

export interface GeoResponse {
    country: string;
    lat: number;
    local_names: { [key: string]: string };
    lon: number;
    name: string;
    state: string;
}

@Injectable({ providedIn: 'root' })
export class GeoApiService {
    http = inject(HttpClient);
    urlService = inject(UrlService);

    directSearch(q: string) {
        const url = this.urlService.getGeoUrl('direct', { q, limit: '5' });

        return this.http.get<GeoResponse[]>(url)
    }
}
