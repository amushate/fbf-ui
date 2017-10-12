import { TestBed, inject } from '@angular/core/testing';

import { DependantService } from './dependant.service';

describe('DependantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependantService]
    });
  });

  it('should ...', inject([DependantService], (service: DependantService) => {
    expect(service).toBeTruthy();
  }));
});
