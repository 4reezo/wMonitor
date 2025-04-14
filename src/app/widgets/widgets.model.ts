import { WeatherLocation } from '../core/geo/geo.model';
import { Weather } from '../core/weather/weather.model';
import { WidgetSettings } from '../shared/weather-widget/weather-widget.model';

export interface WidgetsState {
    suggestedLocations: WeatherLocation[];
    selectedLocation: WeatherLocation | null;
    weatherPreview: Weather | null;
    settingsPreview: WidgetSettings | null;
}
