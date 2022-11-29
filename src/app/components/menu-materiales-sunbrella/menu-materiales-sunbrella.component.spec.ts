import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialesSunbrellaComponent } from './menu-materiales-sunbrella.component';

describe('MenuMaterialesSunbrellaComponent', () => {
  let component: MenuMaterialesSunbrellaComponent;
  let fixture: ComponentFixture<MenuMaterialesSunbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaterialesSunbrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaterialesSunbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
