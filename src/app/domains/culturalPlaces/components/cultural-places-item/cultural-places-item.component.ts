import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturalPlace } from '../../models/cultural-places.models';
import { OpeningHours } from '@/culturalPlaces/models/opening-hours.models';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-cultural-places-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cultural-places-item.component.html',
  styleUrl: './cultural-places-item.component.scss'
})
export class CulturalPlacesItemComponent {
  @Input() culturalPlace!: CulturalPlace;

  get daysOfWeek(): (keyof OpeningHours)[] {
    return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }
}
