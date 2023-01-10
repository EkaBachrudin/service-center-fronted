import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RoleService } from './role.service';
import { Location } from '@angular/common';

@Injectable()
export class RoleGuard implements CanActivate {
  roles: any;
  constructor(
    private authService: AuthService,
    private roleService: RoleService,
    private router: Router,
    private _location: Location
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.roles = JSON.parse(localStorage.getItem('roles') || '{}');
    if (this.roles[0].name == next.data['role']) {
      return true;
    }
    if (this.roles[0].name == next.data['role']) {
      return true;
    }

    this._location.back();
    return false;
  }
}
