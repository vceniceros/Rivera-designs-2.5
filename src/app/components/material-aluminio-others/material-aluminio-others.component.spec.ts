import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAluminioOthersComponent } from './material-aluminio-others.component';

describe('MaterialAluminioOthersComponent', () => {
  let component: MaterialAluminioOthersComponent;
  let fixture: ComponentFixture<MaterialAluminioOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAluminioOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAluminioOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
