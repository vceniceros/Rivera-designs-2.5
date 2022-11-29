import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTirrenoComponent } from './menu-tirreno.component';

describe('MenuTirrenoComponent', () => {
  let component: MenuTirrenoComponent;
  let fixture: ComponentFixture<MenuTirrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTirrenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTirrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
