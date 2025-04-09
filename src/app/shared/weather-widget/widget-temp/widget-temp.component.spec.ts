import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTempComponent } from './widget-temp.component';

describe('WidgetTempComponent', () => {
  let component: WidgetTempComponent;
  let fixture: ComponentFixture<WidgetTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
