import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class UrlService {
    getGeoUrl(target: string, params: Record<string, string> = {}): string {
        let url = new URL(target, environment.geoApiUrl);
        let searchParams = this.getParams(params)

        return `${url.toString()}?${searchParams.toString()}`;
    }

    private getParams(params: Record<string, string>): URLSearchParams {
        const res = new URLSearchParams(params);
        res.set('appid', environment.weatherApiKey);

        return res;
    }
}
