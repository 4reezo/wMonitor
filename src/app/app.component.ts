import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { homeActions } from './home/home.actions';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ LayoutComponent, RouterOutlet ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
    private store = inject(Store);

    title = 'wMonitor';

    ngAfterViewInit() {
        setTimeout(() => {
            this.store.dispatch(homeActions.restoreWidgets());
        }, 0);
    }
}
