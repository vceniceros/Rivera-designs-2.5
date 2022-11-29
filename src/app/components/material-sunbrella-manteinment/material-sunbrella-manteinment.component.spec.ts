import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSunbrellaManteinmentComponent } from './material-sunbrella-manteinment.component';

describe('MaterialSunbrellaManteinmentComponent', () => {
  let component: MaterialSunbrellaManteinmentComponent;
  let fixture: ComponentFixture<MaterialSunbrellaManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSunbrellaManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSunbrellaManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
