import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSillasComponent } from './menu-sillas.component';

describe('MenuSillasComponent', () => {
  let component: MenuSillasComponent;
  let fixture: ComponentFixture<MenuSillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
