import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static rolesUser() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/user-profile');
  }

  // Access user roles
  rolesUser() {
    return this.http.get('http://127.0.0.1:8000/api/user-roles');
  }

  // Logout
  logout(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', null);
  }

  //Get All Users
  getAllUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users');
  }
}
