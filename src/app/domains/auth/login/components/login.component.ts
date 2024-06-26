import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          this.errorMessage = null;
          console.log('Login successful');
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

  getEmailErrorMessage() {
    const emailControl = this.loginForm.get('email');

    if (emailControl?.hasError('required')) {
      return 'Email is required';
    }
    return emailControl?.hasError('email') ? 'Email is not valid' : '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl?.hasError('required') ? 'Password is required' : '';
  }

}
