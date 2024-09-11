import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CulturalPlacesListComponent } from '@/culturalPlaces/components/cultural-places-list/cultural-places-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CulturalPlace } from '@/culturalPlaces/models/cultural-places.models';
import { CulturalPlaceService } from '../../../../services/cultural-place.service';

@Component({
  selector: 'app-dynamic-board',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    CulturalPlacesListComponent
  ],
  templateUrl: './dynamic-board.component.html',
  styleUrls: ['./dynamic-board.component.scss']
})
export class DynamicBoardComponent implements OnInit {
  culturalPlaces: CulturalPlace[] = [];
  errorMessage: string | null = null;

  constructor(private culturalPlaceService: CulturalPlaceService) { }

  ngOnInit(): void {
    this.fetchCulturalPlaces();
  }

  fetchCulturalPlaces(): void {
    this.culturalPlaceService.getCulturalPlaces().subscribe({
      next: (response) => {
        this.culturalPlaces = response.cultural_places;
        console.log('Cultural places fetched successfully');
      },
      error: (error) => {
        console.error('Error fetching cultural places:', error);
        this.errorMessage = 'Failed to load cultural places. Please try again later.';
      }
    });
  }
}
