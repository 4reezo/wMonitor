import { createActionGroup, emptyProps } from '@ngrx/store';

export const homeActions = createActionGroup({
    source: 'Home',
    events: {
        'Add widget': emptyProps()
    }
})

