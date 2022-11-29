import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSilvertexManteinmentComponent } from './material-silvertex-manteinment.component';

describe('MaterialSilvertexManteinmentComponent', () => {
  let component: MaterialSilvertexManteinmentComponent;
  let fixture: ComponentFixture<MaterialSilvertexManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSilvertexManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSilvertexManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
