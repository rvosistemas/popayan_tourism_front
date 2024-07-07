import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PasswordResetService } from '../../../../services/password-reset.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  message: string | null = null;
  token: string;

  constructor(
    private formBuilder: FormBuilder,
    private passwordResetService: PasswordResetService,
    private route: ActivatedRoute
  ) {
    this.token = this.route.snapshot.queryParams['token'];
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.get('newPassword')?.value;
      this.passwordResetService.resetPassword(this.token, newPassword).subscribe({
        next: (response: any) => this.message = response.message,
        error: () => this.message = 'An error occurred. Please try again.'
      });
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

  getPasswordErrorMessage() {
    const passwordControl = this.resetPasswordForm.get('newPassword');
    return passwordControl?.hasError('required') ? 'Password is required' : '';
  }
}
