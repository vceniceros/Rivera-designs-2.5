import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderCoversolComponent } from './material-slider-coversol.component';

describe('MaterialSliderCoversolComponent', () => {
  let component: MaterialSliderCoversolComponent;
  let fixture: ComponentFixture<MaterialSliderCoversolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderCoversolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderCoversolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
