import { createActionGroup, emptyProps } from '@ngrx/store';
import { WeatherLocation } from '../core/geo/geo.model';
import { Weather } from '../core/weather/weather.model';
import { WidgetSettings } from '../shared/weather-widget/weather-widget.model';

export const widgetsActions = createActionGroup({
        source: 'Widgets',
        events: {
            searchLocation: (query: string) => ({ query }),
            searchLocationSuccess: (res: WeatherLocation[]) => ({ res }),
            searchLocationFailure: (err: Error) => ({ err }),

            clearWeatherPreview: emptyProps(),
            gotWeatherPreview: (weather: Weather) => ({ weather }),

            pickLocation: (location: WeatherLocation | null) => ({ location }),
            pickSettings: (settings: WidgetSettings) => ({ settings }),

            saveWidget: (id: string) => ({ id }),
        },
    },
)
