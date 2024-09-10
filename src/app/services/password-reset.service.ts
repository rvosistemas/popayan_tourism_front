// src/app/services/password-reset.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  apiUrl = 'http://localhost:8001';

  constructor(private http: HttpClient) { }

  requestPasswordReset(email: string) {
    return this.http.post(`${this.apiUrl}/user_profile/request-reset-password/`, { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/user_profile/reset-password/`, { token, new_password: newPassword });
  }
}
