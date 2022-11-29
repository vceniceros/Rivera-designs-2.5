import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesSilvertexComponent } from './menu-materiales-silvertex.component';

describe('MenuMaterialesSilvertexComponent', () => {
  let component: MenuMaterialesSilvertexComponent;
  let fixture: ComponentFixture<MenuMaterialesSilvertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesSilvertexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesSilvertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
