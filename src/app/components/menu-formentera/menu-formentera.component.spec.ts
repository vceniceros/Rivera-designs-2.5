import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormenteraComponent } from './menu-formentera.component';

describe('MenuFormenteraComponent', () => {
  let component: MenuFormenteraComponent;
  let fixture: ComponentFixture<MenuFormenteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFormenteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFormenteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
