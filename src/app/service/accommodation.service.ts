import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logement } from '../components/models/Logement';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private apiBaseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient){}

  getAccomodations(){
    return this.http.get<Array<Logement>>(`${this.apiBaseUrl}/accommodations`); 
  }
}
