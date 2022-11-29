import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCoversolOthersComponent } from './material-coversol-others.component';

describe('MaterialCoversolOthersComponent', () => {
  let component: MaterialCoversolOthersComponent;
  let fixture: ComponentFixture<MaterialCoversolOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCoversolOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCoversolOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
