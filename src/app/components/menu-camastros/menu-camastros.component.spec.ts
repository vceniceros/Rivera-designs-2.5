import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCamastrosComponent } from './menu-camastros.component';

describe('MenuCamastrosComponent', () => {
  let component: MenuCamastrosComponent;
  let fixture: ComponentFixture<MenuCamastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCamastrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCamastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
