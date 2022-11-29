import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarrasComponent } from './menu-barras.component';

describe('MenuBarrasComponent', () => {
  let component: MenuBarrasComponent;
  let fixture: ComponentFixture<MenuBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
