import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';
import { City } from '../models/City';
import { SharedVariableService } from 'src/app/service/shared-variable.service';
import { Coordinate } from '../models/Coordinate';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  accommodation$: Observable<Array<Logement>>;
  searchText: string = '';
  coordinatesItems$: Observable<Array<Coordinate>>;

  constructor(
    private http: HttpClient,
    private accommodationService: AccommodationService,
    private searchService: SharedVariableService,
    private router:Router
  ) {}

  redirectToDetailedPage(accommodationId: number): void {
    // Utilisez le routeur pour naviguer vers la page détaillée avec l'ID de l'hébergement
    this.router.navigate(['/detailledpage'], {queryParams: {accommodationId}});
    console.log(accommodationId)
  }

  ngOnInit(): void {
    this.searchService.searchText$.subscribe((searchText) => {
      this.searchText = searchText;
    });
    this.accommodation$ = this.accommodationService.getAccomodations();
    this.coordinatesItems$ = this.http.get(
      `assets/data/coordinates.js`
    ) as Observable<Array<Coordinate>>;
    console.log(this.coordinatesItems$);
  }

  getImageUrl(base64Image: string): string {
    return `data:image/jpeg;base64,${base64Image}`;
  }

  // Méthode pour vérifier si le nom de l'hébergement ou le code postal commence par searchText
  matchesSearchText(accommodationName: string, zipCode: number): boolean {
    if (!this.searchText) {
      // Si searchText est vide, affichez l'hébergement
      return true;
    }

    const searchTextLowerCase = this.searchText.toLowerCase();
    const zipCodeString = zipCode.toString();

    // Comparez le nom de l'hébergement et le code postal avec le searchText (insensible à la casse)
    return (
      accommodationName.toLowerCase().startsWith(searchTextLowerCase) ||
      zipCodeString.startsWith(searchTextLowerCase)
    );
  }
}
