import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../components/models/City';
import { Logement } from '../components/models/Logement';
import { Coordinate } from '../components/models/Coordinate';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  getAccomodations() {
    return this.http.get<Array<Logement>>(`${this.apiBaseUrl}/accommodations`);
  }

  getCitiesByName(city: string): Observable<Array<City>> {
    return this.http.get<Array<City>>(
      `https://geo.api.gouv.fr/communes?nom=${city}`
    );
  }


  getCoordinates() {
    return this.http.get(`assets/data/coordinates.js`) as Observable<
      Array<Coordinate>
    >;
  }
}
