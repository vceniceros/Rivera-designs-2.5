import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeltComponent } from './menu-belt.component';

describe('MenuBeltComponent', () => {
  let component: MenuBeltComponent;
  let fixture: ComponentFixture<MenuBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBeltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
