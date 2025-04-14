import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';

export interface HomeState {
    widgets: Record<string, WeatherWidget>;
}
