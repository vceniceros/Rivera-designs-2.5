import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesCoversolComponent } from './menu-materiales-coversol.component';

describe('MenuMaterialesCoversolComponent', () => {
  let component: MenuMaterialesCoversolComponent;
  let fixture: ComponentFixture<MenuMaterialesCoversolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesCoversolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesCoversolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
