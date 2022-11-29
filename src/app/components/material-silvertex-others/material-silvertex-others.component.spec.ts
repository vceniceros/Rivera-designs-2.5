import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSilvertexOthersComponent } from './material-silvertex-others.component';

describe('MaterialSilvertexOthersComponent', () => {
  let component: MaterialSilvertexOthersComponent;
  let fixture: ComponentFixture<MaterialSilvertexOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSilvertexOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSilvertexOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
