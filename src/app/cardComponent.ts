// image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/accommodations';
  getImages(): Observable<any[]> {
    // Faites une requête HTTP pour récupérer les images depuis votre API
    return this.http.get<any[]>('/accommodations'); // Assurez-vous d'utiliser le bon endpoint
    
  }
  getAccommodationsIds(): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl);
  }
}
