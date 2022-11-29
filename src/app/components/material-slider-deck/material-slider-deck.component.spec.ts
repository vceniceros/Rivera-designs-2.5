import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderDeckComponent } from './material-slider-deck.component';

describe('MaterialSliderDeckComponent', () => {
  let component: MaterialSliderDeckComponent;
  let fixture: ComponentFixture<MaterialSliderDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
