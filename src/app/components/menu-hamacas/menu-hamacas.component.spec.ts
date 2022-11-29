import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamacasComponent } from './menu-hamacas.component';

describe('MenuHamacasComponent', () => {
  let component: MenuHamacasComponent;
  let fixture: ComponentFixture<MenuHamacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHamacasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHamacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
