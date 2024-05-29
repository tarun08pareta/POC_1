import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 })
export class xhildActiveGuard implements CanActivateChild{

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  :Observable<boolean | UrlTree>|Promise<boolean | UrlTree>|boolean | UrlTree
  {
       return true;
  }

};
