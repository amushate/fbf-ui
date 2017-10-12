import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbfLifeComponent } from './fbf-life.component';

describe('FbfLifeComponent', () => {
  let component: FbfLifeComponent;
  let fixture: ComponentFixture<FbfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
