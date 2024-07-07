import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-success-dialog',
  standalone: true,
  imports: [],
  templateUrl: './register-success-dialog.component.html',
  styleUrl: './register-success-dialog.component.scss'
})
export class RegisterSuccessDialogComponent {
  constructor(private dialogRef: MatDialogRef<RegisterSuccessDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
