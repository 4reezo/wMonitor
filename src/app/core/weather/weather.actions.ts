import { createActionGroup } from '@ngrx/store';
import { Weather } from './weather.model';

export const weatherActions = createActionGroup({
    source: 'Weather',
    events: {
        getWeather: (coords: [ number, number ], context: string) => ({ coords, context }),
        getWeatherSuccess: (weather: Weather, context: string) => ({ weather, context }),
        getWeatherFailure: (err: Error) => ({ err }),
    },
})
