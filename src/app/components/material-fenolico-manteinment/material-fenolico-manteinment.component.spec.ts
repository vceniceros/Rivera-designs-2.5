import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFenolicoManteinmentComponent } from './material-fenolico-manteinment.component';

describe('MaterialFenolicoManteinmentComponent', () => {
  let component: MaterialFenolicoManteinmentComponent;
  let fixture: ComponentFixture<MaterialFenolicoManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFenolicoManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFenolicoManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
