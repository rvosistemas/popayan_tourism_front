import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.userData.username, this.userData.password).subscribe(
      {
        next: () => {
          console.log('Register successful');
        },
        error: (error) => {
          console.error('Register failed', error);
        }
      }
    );
  }

}
