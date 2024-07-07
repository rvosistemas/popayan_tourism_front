import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PasswordResetService } from '../../../../services/password-reset.service';

@Component({
  selector: 'app-request-password-reset',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent {
  requestPasswordResetForm: FormGroup;
  message: string | null = null;

  constructor(private formBuilder: FormBuilder, private passwordResetService: PasswordResetService) {
    this.requestPasswordResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.requestPasswordResetForm.valid) {
      const email = this.requestPasswordResetForm.get('email')?.value;
      this.passwordResetService.requestPasswordReset(email).subscribe({
        next: (response: any) => this.message = response.message,
        error: () => this.message = 'An error occurred. Please try again.'
      });
    } else {
      this.requestPasswordResetForm.markAllAsTouched();
    }
  }

  getEmailErrorMessage() {
    const emailControl = this.requestPasswordResetForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email is required';
    }
    return emailControl?.hasError('email') ? 'Email is not valid' : '';
  }
}
