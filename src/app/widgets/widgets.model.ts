import { WeatherLocation } from '../core/geo/geo.model';
import { Weather } from '../core/weather/weather.model';

export interface WidgetsState {
    suggestedLocations: WeatherLocation[];
    selectedLocation: WeatherLocation | null;
    weatherPreview: Weather | null;
}
