import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderSilvertexComponent } from './material-slider-silvertex.component';

describe('MaterialSliderSilvertexComponent', () => {
  let component: MaterialSliderSilvertexComponent;
  let fixture: ComponentFixture<MaterialSliderSilvertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderSilvertexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderSilvertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
