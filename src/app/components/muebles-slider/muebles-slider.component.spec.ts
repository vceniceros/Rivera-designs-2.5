import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesSliderComponent } from './muebles-slider.component';

describe('MueblesSliderComponent', () => {
  let component: MueblesSliderComponent;
  let fixture: ComponentFixture<MueblesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
