import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  searchText: string = ''; // Propriété pour stocker le texte de l'input

  ngAfterViewInit() {
    // Récupérez l'élément input par son id
    const searchInput = document.getElementById("search-input");

    // Vérifiez si l'élément existe avant d'ajouter l'écouteur d'événements
    if (searchInput) {
      searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          // Lorsque la touche "Entrée" est pressée, changez la couleur de fond
          searchInput.style.backgroundColor = "yellow"; // Changez la couleur comme souhaité
        }
      });
    }
  }

}
