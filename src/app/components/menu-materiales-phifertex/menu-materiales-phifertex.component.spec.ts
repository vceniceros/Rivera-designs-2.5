import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesPhifertexComponent } from './menu-materiales-phifertex.component';

describe('MenuMaterialesPhifertexComponent', () => {
  let component: MenuMaterialesPhifertexComponent;
  let fixture: ComponentFixture<MenuMaterialesPhifertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesPhifertexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesPhifertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
