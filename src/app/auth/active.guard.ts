import { CanActivateFn } from '@angular/router';

export const activeGuard: CanActivateFn = (route, state) => {
  return true;
};
