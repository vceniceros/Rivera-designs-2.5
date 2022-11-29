import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBanquetasComponent } from './menu-banquetas.component';

describe('MenuBanquetasComponent', () => {
  let component: MenuBanquetasComponent;
  let fixture: ComponentFixture<MenuBanquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBanquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBanquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
