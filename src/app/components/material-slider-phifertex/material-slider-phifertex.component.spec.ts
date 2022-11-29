import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderPhifertexComponent } from './material-slider-phifertex.component';

describe('MaterialSliderPhifertexComponent', () => {
  let component: MaterialSliderPhifertexComponent;
  let fixture: ComponentFixture<MaterialSliderPhifertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderPhifertexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderPhifertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
