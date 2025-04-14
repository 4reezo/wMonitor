import { createActionGroup, emptyProps } from '@ngrx/store';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';
import { Weather } from '../core/weather/weather.model';

export const homeActions = createActionGroup({
    source: 'Home',
    events: {
        insertWidget: (widget: WeatherWidget) => ({ widget }),
        removeWidget: (id: string) => ({ id }),

        updateWeather: (id: string) => ({ id }),
        updateWeatherSuccess: (id: string, weather: Weather) => ({ id, weather }),
        updateWeatherFailure: (err: Error) => ({ err }),

        restoreWidgets: emptyProps(),
        restoreWidgetsSuccess: (widgets: Record<string, WeatherWidget>) => ({ widgets }),
        restoreWidgetsFailure: (err: Error) => ({ err }),
    },
})

