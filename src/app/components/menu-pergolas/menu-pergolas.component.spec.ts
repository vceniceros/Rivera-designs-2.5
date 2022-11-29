import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPergolasComponent } from './menu-pergolas.component';

describe('MenuPergolasComponent', () => {
  let component: MenuPergolasComponent;
  let fixture: ComponentFixture<MenuPergolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPergolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPergolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
