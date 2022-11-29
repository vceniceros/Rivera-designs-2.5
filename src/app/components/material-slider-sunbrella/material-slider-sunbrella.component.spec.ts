import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderSunbrellaComponent } from './material-slider-sunbrella.component';

describe('MaterialSliderSunbrellaComponent', () => {
  let component: MaterialSliderSunbrellaComponent;
  let fixture: ComponentFixture<MaterialSliderSunbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderSunbrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderSunbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
