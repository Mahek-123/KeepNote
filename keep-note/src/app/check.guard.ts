import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
    // return window.confirm("Are you sure you want to leave?")
  }

}
