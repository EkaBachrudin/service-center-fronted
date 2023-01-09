import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private authService: AuthService) {}

  getRoles() {
    let roles: any;
    this.authService.rolesUser().subscribe((data: any) => (roles = data));
    console.log(roles);
    return roles;
  }
}
