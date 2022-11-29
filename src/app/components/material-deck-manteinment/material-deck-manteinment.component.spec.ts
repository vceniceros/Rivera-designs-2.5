import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeckManteinmentComponent } from './material-deck-manteinment.component';

describe('MaterialDeckManteinmentComponent', () => {
  let component: MaterialDeckManteinmentComponent;
  let fixture: ComponentFixture<MaterialDeckManteinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDeckManteinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeckManteinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
