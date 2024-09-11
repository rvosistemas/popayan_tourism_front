import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CulturalPlace } from '@/culturalPlaces/models/cultural-places.models';

@Injectable({
  providedIn: 'root'
})
export class CulturalPlaceService {
  private apiUrl = 'http://127.0.0.1:8001/cultural_places/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCulturalPlaces(): Observable<{ cultural_places: CulturalPlace[], total: number, num_pages: number, current_page: number }> {
    const token = this.authService.getToken();
    console.log("Token desde servicio de lugar");
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<{ cultural_places: CulturalPlace[], total: number, num_pages: number, current_page: number }>(
      this.apiUrl,
      { headers }
    );
  }
}
