import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsGridComponent } from './colors-grid.component';

describe('ColorsGridComponent', () => {
  let component: ColorsGridComponent;
  let fixture: ComponentFixture<ColorsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
