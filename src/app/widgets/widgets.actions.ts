import { createActionGroup, emptyProps } from '@ngrx/store';
import { WeatherLocation } from '../core/geo/geo.model';

export const widgetsActions = createActionGroup({
        source: 'Widgets',
        events: {
            searchLocation: (query: string) => ({ query }),
            searchLocationSuccess: (res: WeatherLocation[]) => ({ res }),
            searchLocationFailure: (err: Error[]) => ({ err }),

            pickLocation: (location: WeatherLocation | null) => ({ location }),

            saveWidget: (id?: string) => ({ id }),
        },
    },
)
