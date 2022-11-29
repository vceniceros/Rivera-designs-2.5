import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderFenolicoComponent } from './material-slider-fenolico.component';

describe('MaterialSliderFenolicoComponent', () => {
  let component: MaterialSliderFenolicoComponent;
  let fixture: ComponentFixture<MaterialSliderFenolicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSliderFenolicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSliderFenolicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
