import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8001';

  constructor(private http: HttpClient) { }

  register(data: object): Observable<any> {
    return this.http.post(`${this.apiUrl}/user_profile/api/register`, data);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user_profile/api/login`, { username, password })
      .pipe(
        tap((res: any) => {
          console.log('login response');
          console.log(res);
          if (res.token) {
            this.setToken(res.token);
          }
        })
      )
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
