import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesFenolicoComponent } from './menu-materiales-fenolico.component';

describe('MenuMaterialesFenolicoComponent', () => {
  let component: MenuMaterialesFenolicoComponent;
  let fixture: ComponentFixture<MenuMaterialesFenolicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesFenolicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesFenolicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
