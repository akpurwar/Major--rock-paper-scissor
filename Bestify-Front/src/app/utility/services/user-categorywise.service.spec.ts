import { TestBed } from '@angular/core/testing';

import { UserCategorywiseService } from './user-categorywise.service';

describe('UserCategorywiseService', () => {
  let service: UserCategorywiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCategorywiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
