import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeckComponent } from './menu-deck.component';

describe('MenuDeckComponent', () => {
  let component: MenuDeckComponent;
  let fixture: ComponentFixture<MenuDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
