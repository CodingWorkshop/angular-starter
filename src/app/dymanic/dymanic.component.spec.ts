import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DymanicComponent } from './dymanic.component';

describe('DymanicComponent', () => {
  let component: DymanicComponent;
  let fixture: ComponentFixture<DymanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DymanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DymanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
