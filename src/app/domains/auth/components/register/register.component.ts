import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterSuccessDialogComponent } from '../register-success-dialog/register-success-dialog.component';
import { MY_FORMATS } from '@/shared/utils/date/formats';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const data = {
        userName: this.registerForm.value.userName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        dateOfBirth: this.registerForm.value.dateOfBirth.toISOString().split('T')[0]
      };

      this.authService.register(data).subscribe({
        next: () => {
          this.errorMessage = null;
          this.showSuccessDialog();
        },
        error: (error) => {
          if (error.status === 400) {
            this.errorMessage = 'User already exists or invalid data, please try again';
          } else {
            this.errorMessage = 'An error occurred, please try again later';
          }
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  showSuccessDialog() {
    const dialogRef = this.dialog.open(RegisterSuccessDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  getUsernameErrorMessage() {
    const userNameControl = this.registerForm.get('userName');
    return userNameControl?.hasError('required') ? 'Username is required' : '';
  }

  getEmailErrorMessage() {
    const emailControl = this.registerForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email is required';
    }
    return emailControl?.hasError('email') ? 'Email is not valid' : '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.registerForm.get('password');
    return passwordControl?.hasError('required') ? 'Password is required' : '';
  }

  getDateOfBirthErrorMessage() {
    const dateOfBirthControl = this.registerForm.get('dateOfBirth');
    return dateOfBirthControl?.hasError('required') ? 'Date of birth is required' : '';
  }
}
