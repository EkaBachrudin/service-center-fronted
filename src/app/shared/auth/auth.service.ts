import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// User interface
export class User {
  name!: string;
  email!: string;
  password!: string;
  password_confirmation!: string;
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

  // Logout
  logout(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', null);
  }
}
