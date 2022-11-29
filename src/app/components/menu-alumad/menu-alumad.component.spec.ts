import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlumadComponent } from './menu-alumad.component';

describe('MenuAlumadComponent', () => {
  let component: MenuAlumadComponent;
  let fixture: ComponentFixture<MenuAlumadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlumadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlumadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
