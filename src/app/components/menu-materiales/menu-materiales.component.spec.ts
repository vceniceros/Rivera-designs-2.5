import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesComponent } from './menu-materiales.component';

describe('MenuMaterialesComponent', () => {
  let component: MenuMaterialesComponent;
  let fixture: ComponentFixture<MenuMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
