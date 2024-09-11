import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturalPlace } from '@/culturalPlaces/models/cultural-places.models';
import { CulturalPlacesItemComponent } from "../cultural-places-item/cultural-places-item.component";
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-cultural-places-list',
  standalone: true,
  imports: [CommonModule, CulturalPlacesItemComponent, MatListModule, FlexLayoutModule],
  templateUrl: './cultural-places-list.component.html',
  styleUrl: './cultural-places-list.component.scss'
})
export class CulturalPlacesListComponent {
  @Input() culturalPlaces: CulturalPlace[] = [];
}
