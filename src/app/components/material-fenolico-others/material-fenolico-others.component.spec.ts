import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFenolicoOthersComponent } from './material-fenolico-others.component';

describe('MaterialFenolicoOthersComponent', () => {
  let component: MaterialFenolicoOthersComponent;
  let fixture: ComponentFixture<MaterialFenolicoOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFenolicoOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFenolicoOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
