import { ActivatedRouteSnapshot, CanActivateFn, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataResolveGuard implements Resolve<any> {
  constructor(private service:ProjectService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getServices();
  }
};
