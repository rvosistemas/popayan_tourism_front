import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: []
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.get('userName')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login(userName, password).subscribe({
        next: () => {
          this.errorMessage = null;
          console.log('Login successful');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          if (error.status === 400) {
            this.errorMessage = 'Invalid credentials, please try again';
          } else {
            this.errorMessage = 'An error occurred, please try again later';
          }
        }
      });
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  getUsernameErrorMessage() {
    const userNameControl = this.loginForm.get('userName');
    return userNameControl?.hasError('required') ? 'Username is required' : '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl?.hasError('required') ? 'Password is required' : '';
  }

  navigateToResetPassword() {
    this.router.navigate(['/auth/request-password-reset']);
  }

}
