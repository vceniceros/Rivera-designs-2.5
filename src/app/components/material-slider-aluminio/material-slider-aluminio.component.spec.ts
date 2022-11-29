import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderAluminioComponent } from './material-slider-aluminio.component';

describe('MaterialSliderAluminioComponent', () => {
  let component: MaterialSliderAluminioComponent;
  let fixture: ComponentFixture<MaterialSliderAluminioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderAluminioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderAluminioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
