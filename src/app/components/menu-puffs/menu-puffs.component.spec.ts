import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPuffsComponent } from './menu-puffs.component';

describe('MenuPuffsComponent', () => {
  let component: MenuPuffsComponent;
  let fixture: ComponentFixture<MenuPuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPuffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
