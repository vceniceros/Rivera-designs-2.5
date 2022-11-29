import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsSectionComponent } from './prestations-section.component';

describe('PrestationsSectionComponent', () => {
  let component: PrestationsSectionComponent;
  let fixture: ComponentFixture<PrestationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
