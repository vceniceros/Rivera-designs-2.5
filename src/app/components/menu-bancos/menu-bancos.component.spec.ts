import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBancosComponent } from './menu-bancos.component';

describe('MenuBancosComponent', () => {
  let component: MenuBancosComponent;
  let fixture: ComponentFixture<MenuBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
