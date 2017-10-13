import { TestBed, inject } from '@angular/core/testing';

import { BoardMemberService } from './board-member.service';

describe('BoardMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardMemberService]
    });
  });

  it('should ...', inject([BoardMemberService], (service: BoardMemberService) => {
    expect(service).toBeTruthy();
  }));
});
