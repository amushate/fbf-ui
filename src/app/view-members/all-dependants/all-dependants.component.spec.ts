import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDependantsComponent } from './all-dependants.component';

describe('AllDependantsComponent', () => {
  let component: AllDependantsComponent;
  let fixture: ComponentFixture<AllDependantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDependantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDependantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
