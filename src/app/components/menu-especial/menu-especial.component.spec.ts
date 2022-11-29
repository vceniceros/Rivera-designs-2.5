import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEspecialComponent } from './menu-especial.component';

describe('MenuEspecialComponent', () => {
  let component: MenuEspecialComponent;
  let fixture: ComponentFixture<MenuEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
