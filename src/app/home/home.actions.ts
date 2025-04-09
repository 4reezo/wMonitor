import { createActionGroup } from '@ngrx/store';
import { WeatherLocation } from '../core/geo/geo.model';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';

export const homeActions = createActionGroup({
    source: 'Home',
    events: {
        insertWidget: (widget: WeatherWidget) => ({ widget }),
    },
})

