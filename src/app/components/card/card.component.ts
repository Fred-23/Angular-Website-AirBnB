import { Component, Input } from '@angular/core';
import { Logement } from '../models/Logement';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() accommodation: Logement; // Propriété d'entrée pour les données du logement
}

