import { Injectable } from '@angular/core';
import { CanActivateFn, CanDeactivate } from '@angular/router';
import { SkillComponent } from '../skill/skill.component';

@Injectable({
  providedIn: 'root'})
export class deActiveGuard implements CanDeactivate<SkillComponent> {

  canDeactivate(): boolean {
   return window.confirm('Are you sure you want to leave?');
};
}
