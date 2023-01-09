import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { async, map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RoleService } from './role.service';

@Injectable()
export class RoleGuard implements CanActivate {
  roles: any;
  constructor(
    private authService: AuthService,
    private roleService: RoleService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.rolesUser().forEach((data: any) => {
      this.roles = data;
      console.log(this.roles);
    });

    console.log(this.roles);

    return true;
  }
}
