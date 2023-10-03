import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';
import { City } from '../models/City';
import { SharedVariableService } from 'src/app/service/shared-variable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accommodation$: Observable<Array<Logement>>;
  searchText: string = '';

  constructor(
    private accommodationService: AccommodationService,
    private searchService: SharedVariableService
  ) { }

  ngOnInit(): void {
    this.searchService.searchText$.subscribe(searchText => {
      this.searchText = searchText;
    });
    this.accommodation$ = this.accommodationService.getAccomodations();
  }

  getImageUrl(base64Image: string): string {
    return `data:image/jpeg;base64,${base64Image}`;
  }

  // Méthode pour vérifier si l'hébergement correspond au searchText
  matchesSearchText(accommodationName: string): boolean {
    
    if (!this.searchText) {
      // Si searchText est vide, affichez l'hébergement
      return true;
    }
    // Sinon, comparez le nom de l'hébergement avec le searchText (insensible à la casse)
    return accommodationName.toLowerCase().startsWith(this.searchText.toLowerCase());
  }
}
