import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  styleUrl: './app.component.scss',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'popayan_tourism_front';
}
