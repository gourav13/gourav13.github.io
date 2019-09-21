import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolxprodersComponent } from './schoolxproders.component';

describe('SchoolxprodersComponent', () => {
  let component: SchoolxprodersComponent;
  let fixture: ComponentFixture<SchoolxprodersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolxprodersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolxprodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
