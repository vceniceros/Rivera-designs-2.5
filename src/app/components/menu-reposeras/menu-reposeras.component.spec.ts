import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReposerasComponent } from './menu-reposeras.component';

describe('MenuReposerasComponent', () => {
  let component: MenuReposerasComponent;
  let fixture: ComponentFixture<MenuReposerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuReposerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReposerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
