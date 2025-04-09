import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWindComponent } from './widget-wind.component';

describe('WidgetWindComponent', () => {
  let component: WidgetWindComponent;
  let fixture: ComponentFixture<WidgetWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetWindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
