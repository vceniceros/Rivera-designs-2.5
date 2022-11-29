import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeckOthersComponent } from './material-deck-others.component';

describe('MaterialDeckOthersComponent', () => {
  let component: MaterialDeckOthersComponent;
  let fixture: ComponentFixture<MaterialDeckOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDeckOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeckOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
