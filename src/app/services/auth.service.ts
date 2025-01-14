import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8001';

  constructor(private http: HttpClient) { }

  register(data: object) {
    return this.http.post(`${this.apiUrl}/user_profile/api/register`, data);
  }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/user_profile/api/login`, { username, password });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
