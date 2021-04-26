import { TestBed } from '@angular/core/testing';

import { ColorsVoteService } from './colors-vote.service';

describe('ColorsVoteService', () => {
  let service: ColorsVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
