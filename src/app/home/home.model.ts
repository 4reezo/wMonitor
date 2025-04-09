import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';

export interface HomeState {
    widgetList: Record<string, WeatherWidget>;
}
