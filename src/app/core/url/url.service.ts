import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
    getGeoUrl(target: string, params: Record<string, string | number> = {}): string {
        let url = new URL(target, environment.geoApiUrl);
        let searchParams = this.getParams(params)

        return `${url.toString()}?${searchParams.toString()}`;
    }

    getWeatherUrl(target: string, params: Record<string, string | number> = {}): string {
        let url = new URL(target, environment.weatherApiUrl);
        let searchParams = this.getParams(params)

        return `${url.toString()}?${searchParams.toString()}`;
    }

    private getParams(params: Record<string, string | number>): URLSearchParams {
        // using "any" just to pass strange signature of URLSearchParams
        // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1568
        const res = new URLSearchParams(params as any);
        res.set('appid', environment.weatherApiKey);

        return res;
    }
}
