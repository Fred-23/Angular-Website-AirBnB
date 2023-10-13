import { Component, Input } from '@angular/core';
import { Logement } from '../models/Logement';

@Component({
  selector: 'app-detailled-card',
  templateUrl: './detailled-card.component.html',
  styleUrls: ['./detailled-card.component.scss']
})
export class DetailledCardComponent {
  @Input() accommodation: Logement;
  toggleFavorite() {
    this.accommodation.favourite = !this.accommodation.favourite;
  }
}
