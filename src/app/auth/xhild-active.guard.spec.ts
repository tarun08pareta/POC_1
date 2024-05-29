import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { xhildActiveGuard } from './xhild-active.guard';

describe('xhildActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => xhildActiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
