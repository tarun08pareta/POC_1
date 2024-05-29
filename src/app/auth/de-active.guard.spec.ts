import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { deActiveGuard } from './de-active.guard';

describe('deActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deActiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
