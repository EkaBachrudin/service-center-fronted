import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/user-profile');
  }

  // Access user roles
  rolesUser() {
    return this.http.get('http://127.0.0.1:8000/api/user-roles');
  }

  //Get All Users
  getAllUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users');
  }

  // Access user roles
  getUserByCounter(id: number) {
    return this.http.get(
      `http://127.0.0.1:8000/api/user/getUserByCounter/${id}`
    );
  }
}
