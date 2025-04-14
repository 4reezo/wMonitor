import { SpeedUnits, TempUnits, Weather } from '../../core/weather/weather.model';
import { WeatherLocation } from '../../core/geo/geo.model';

export interface WidgetSettings {
    tempUnits: TempUnits;
    showTime: boolean;
    speedUnits: SpeedUnits;
}

export interface WeatherWidget {
    id: string | 'new';
    location: WeatherLocation;
    settings: WidgetSettings;
    weather: Weather;
}
