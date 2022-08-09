import { TestBed } from '@angular/core/testing';

import { CanLoadGuardGuard } from './can-load-guard.guard';

describe('CanLoadGuardGuard', () => {
  let guard: CanLoadGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
