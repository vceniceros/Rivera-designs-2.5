import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesContactComponent } from './muebles-contact.component';

describe('MueblesContactComponent', () => {
  let component: MueblesContactComponent;
  let fixture: ComponentFixture<MueblesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
