import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSunbrellaOthersComponent } from './material-sunbrella-others.component';

describe('MaterialSunbrellaOthersComponent', () => {
  let component: MaterialSunbrellaOthersComponent;
  let fixture: ComponentFixture<MaterialSunbrellaOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSunbrellaOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSunbrellaOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
