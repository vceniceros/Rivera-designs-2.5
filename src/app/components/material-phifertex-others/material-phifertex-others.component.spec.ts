import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPhifertexOthersComponent } from './material-phifertex-others.component';

describe('MaterialPhifertexOthersComponent', () => {
  let component: MaterialPhifertexOthersComponent;
  let fixture: ComponentFixture<MaterialPhifertexOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPhifertexOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPhifertexOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
