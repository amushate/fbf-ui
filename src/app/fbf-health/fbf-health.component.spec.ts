import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbfHealthComponent } from './fbf-health.component';

describe('FbfHealthComponent', () => {
  let component: FbfHealthComponent;
  let fixture: ComponentFixture<FbfHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
