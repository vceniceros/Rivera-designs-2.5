import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSillonesComponent } from './menu-sillones.component';

describe('MenuSillonesComponent', () => {
  let component: MenuSillonesComponent;
  let fixture: ComponentFixture<MenuSillonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSillonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSillonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
