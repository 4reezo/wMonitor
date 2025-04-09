import { createActionGroup } from '@ngrx/store';

export const appRouterActions = createActionGroup({
    source: 'App router',
    events: {
        go: (commands: (string | number)[]) => ({ commands }),
    },
})
