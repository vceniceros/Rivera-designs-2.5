import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesDeckComponent } from './menu-materiales-deck.component';

describe('MenuMaterialesDeckComponent', () => {
  let component: MenuMaterialesDeckComponent;
  let fixture: ComponentFixture<MenuMaterialesDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
