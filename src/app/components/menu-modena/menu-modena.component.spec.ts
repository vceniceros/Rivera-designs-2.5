import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModenaComponent } from './menu-modena.component';

describe('MenuModenaComponent', () => {
  let component: MenuModenaComponent;
  let fixture: ComponentFixture<MenuModenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuModenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
