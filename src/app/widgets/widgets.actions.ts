import { createActionGroup } from '@ngrx/store';
import { WeatherLocation } from '../core/geo/geo.model';

export const widgetsActions = createActionGroup({
        source: 'Weather details',
        events: {
            searchLocation: (query: string) => ({ query }),
            searchLocationSuccess: (res: WeatherLocation[]) => ({ res }),
            searchLocationFailure: (err: Error[]) => ({ err }),
        },
    },
)
