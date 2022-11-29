import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionesMenuComponent } from './colecciones-menu.component';

describe('ColeccionesMenuComponent', () => {
  let component: ColeccionesMenuComponent;
  let fixture: ComponentFixture<ColeccionesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccionesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
