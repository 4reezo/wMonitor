import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { asyncScheduler, throttleTime } from 'rxjs';
import { WeatherLocation } from '../../core/geo/geo.model';

@Component({
    selector: 'app-location-picker',
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './location-picker.component.html',
    styleUrl: './location-picker.component.scss',
    providers: [ {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => LocationPickerComponent),
        multi: true,
    } ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationPickerComponent implements ControlValueAccessor {
    onChange!: (value: WeatherLocation) => void;
    onTouched!: () => void;

    private fb = inject(FormBuilder);

    disabled = false;
    locationInput = this.fb.control<string | null>(null);

    @Input()
    suggestedOptions: WeatherLocation[] | null = [];
    @Output()
    search = new EventEmitter<string>();

    constructor() {
        this.locationInput.valueChanges.pipe(
            takeUntilDestroyed(),
            throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
        ).subscribe(value => {
            this.search.emit(value?.trim());
        });
    }

    writeValue(obj: WeatherLocation): void {
        // not needed for now
    }

    registerOnChange(fn: (value: WeatherLocation) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    pickLocation(location: WeatherLocation) {
        this.onChange(location);
        this.onTouched();
    }
}
