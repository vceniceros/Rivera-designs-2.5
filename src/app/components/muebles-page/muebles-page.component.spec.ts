import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesPageComponent } from './muebles-page.component';

describe('MueblesPageComponent', () => {
  let component: MueblesPageComponent;
  let fixture: ComponentFixture<MueblesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
