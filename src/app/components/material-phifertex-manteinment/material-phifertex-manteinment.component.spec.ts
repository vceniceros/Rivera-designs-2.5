import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPhifertexManteinmentComponent } from './material-phifertex-manteinment.component';

describe('MaterialPhifertexManteinmentComponent', () => {
  let component: MaterialPhifertexManteinmentComponent;
  let fixture: ComponentFixture<MaterialPhifertexManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPhifertexManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPhifertexManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
