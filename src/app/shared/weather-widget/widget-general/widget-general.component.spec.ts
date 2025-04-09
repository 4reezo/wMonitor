import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGeneralComponent } from './widget-general.component';

describe('WidgetGeneralComponent', () => {
  let component: WidgetGeneralComponent;
  let fixture: ComponentFixture<WidgetGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
