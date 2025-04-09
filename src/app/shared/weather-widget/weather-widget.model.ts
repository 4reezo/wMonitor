import { Weather } from '../../core/weather/weather.model';
import { WeatherLocation } from '../../core/geo/geo.model';

export interface WidgetSettings {
    tempUnits: 'C' | 'F';
    showTime: boolean;
}

export interface WeatherWidget {
    id: string;
    location: WeatherLocation;
    settings: WidgetSettings;
    weather: Weather;
}
