import { Injectable } from '@angular/core';
import { WeatherWidget } from '../../shared/weather-widget/weather-widget.model';

const widgetsKey = 'widgets';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    storage = localStorage;

    saveWidgets(widgets: Record<string, WeatherWidget>) {
        this.storage.setItem(widgetsKey, JSON.stringify(widgets));
    }

    restoreWidgets(): Record<string, WeatherWidget> | null {
        const text = this.storage.getItem(widgetsKey);

        if (!text) {
            return null;
        }

        try {
            return JSON.parse(text);
        } catch (e) {
            console.error('Json parsing failed for string: ' + text);
            throw e;
        }
    }
}
