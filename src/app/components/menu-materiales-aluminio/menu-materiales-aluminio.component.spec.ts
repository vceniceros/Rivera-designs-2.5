import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesAluminioComponent } from './menu-materiales-aluminio.component';

describe('MenuMaterialesAluminioComponent', () => {
  let component: MenuMaterialesAluminioComponent;
  let fixture: ComponentFixture<MenuMaterialesAluminioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesAluminioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesAluminioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
