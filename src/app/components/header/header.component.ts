import { Component, AfterViewInit } from '@angular/core';
import { City } from '../models/City';
import { Observable } from 'rxjs';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { SharedVariableService } from 'src/app/service/shared-variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  searchText: string = ''; // Propriété pour stocker le texte de l'input
  listCity$: Observable<Array<City>>;
  showMenu:boolean= false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor(private accommodationService: AccommodationService,private searchService: SharedVariableService ) { }
  ngAfterViewInit() {
    // Récupérez l'élément input par son id
    const searchInput = document.getElementById("search-input");

    // Vérifiez si l'élément existe avant d'ajouter l'écouteur d'événements
    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        // Mettre à jour this.searchText à chaque changement d'entrée
        this.searchText = (event.target as HTMLInputElement).value;
        this.searchService.setSearchText(this.searchText);
        this.listCity$ = this.accommodationService.getCitiesByName(this.searchText);

      });

      searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          this.listCity$ = this.accommodationService.getCitiesByName(this.searchText);
          console.log(this.searchText)
        }
      });
    }
  }



  ngOnInit(): void {
    
  }
}
