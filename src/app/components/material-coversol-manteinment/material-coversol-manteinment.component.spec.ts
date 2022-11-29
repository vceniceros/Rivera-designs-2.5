import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCoversolManteinmentComponent } from './material-coversol-manteinment.component';

describe('MaterialCoversolManteinmentComponent', () => {
  let component: MaterialCoversolManteinmentComponent;
  let fixture: ComponentFixture<MaterialCoversolManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCoversolManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCoversolManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
