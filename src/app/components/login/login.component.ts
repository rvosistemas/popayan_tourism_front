import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('particle', [
      state('void', style({ opacity: 0, transform: 'translate(0, 0)' })),
      transition('void => *', [
        animate('1s', keyframes([
          style({ transform: 'translate({{x}}, {{y}})', opacity: 1, offset: 0 }),
          style({ transform: 'translate({{x}}, {{y}})', opacity: 0, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  particles: { x: number, y: number }[] = [];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
        next: () => {
          console.log('Login successful');
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }

  animateParticles() {
    for (let i = 0; i < 10; i++) {
      this.particles.push({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50
      });
    }
  }

  sparks() {
    const matCard = this.elementRef.nativeElement.querySelector('.mat-mdc-card-content');
    if (matCard) {
      for (let i = 0; i < 50; i++) {
        console.log("X".repeat(10));
        const spark = this.renderer.createElement('i');
        spark.classList.add('spark');

        const randomX = (Math.random() - 0.5) * window.innerWidth;
        const randomY = (Math.random() - 0.5) * window.innerHeight;
        spark.style.setProperty('--x', randomX + 'px');
        spark.style.setProperty('--y', randomY + 'px');

        const randomSize = Math.random() * 8 + 2;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';

        const duration = Math.random() * 2 + 0.5;
        spark.style.animation = `animate ${duration}s ease-out forwards`;

        this.renderer.appendChild(matCard, spark);

        // setTimeout(() => {
        //   spark.remove();
        // }, duration * 8000);
      }
    }
  }
}
