import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbfNavBarComponent } from './fbf-nav-bar.component';

describe('FbfNavBarComponent', () => {
  let component: FbfNavBarComponent;
  let fixture: ComponentFixture<FbfNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
