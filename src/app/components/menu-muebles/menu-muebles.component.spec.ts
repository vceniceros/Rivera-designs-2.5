import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMueblesComponent } from './menu-muebles.component';

describe('MenuMueblesComponent', () => {
  let component: MenuMueblesComponent;
  let fixture: ComponentFixture<MenuMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
