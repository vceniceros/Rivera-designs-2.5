import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSliderComponent } from './principal-slider.component';

describe('PrincipalSliderComponent', () => {
  let component: PrincipalSliderComponent;
  let fixture: ComponentFixture<PrincipalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
