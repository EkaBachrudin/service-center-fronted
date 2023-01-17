import { Injectable } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private userService: UserService) {}

  getRoles() {
    let roles: any;
    this.userService.rolesUser().subscribe((data: any) => (roles = data));
    return roles;
  }
}
