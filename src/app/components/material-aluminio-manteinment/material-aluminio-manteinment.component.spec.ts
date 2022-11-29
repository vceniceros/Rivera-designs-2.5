import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAluminioManteinmentComponent } from './material-aluminio-manteinment.component';

describe('MaterialAluminioManteinmentComponent', () => {
  let component: MaterialAluminioManteinmentComponent;
  let fixture: ComponentFixture<MaterialAluminioManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAluminioManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAluminioManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
