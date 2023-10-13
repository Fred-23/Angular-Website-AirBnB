import { Component, Input } from '@angular/core';
import { Logement } from '../models/Logement';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

//Ce composant quand un wrapper pour styliser automatiquement les cards en récupérant les informations d'un logement en entrée.
export class CardComponent {
  @Input() accommodation: Logement;

  //Cela permet de faire changer l'icône du coeur en fonction des données de la database
  toggleFavorite() {
    this.accommodation.favourite = !this.accommodation.favourite;
  }
}

