import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionSliderComponent } from './coleccion-slider.component';

describe('ColeccionSliderComponent', () => {
  let component: ColeccionSliderComponent;
  let fixture: ComponentFixture<ColeccionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccionSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
