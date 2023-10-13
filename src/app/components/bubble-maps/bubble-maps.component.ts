import { Component } from '@angular/core';

//Composant permet de gérer la gestion du boutont pour switcher entre l'affichage de la carte et de la liste
@Component({
  selector: 'app-bubble-maps',
  templateUrl: './bubble-maps.component.html',
  styleUrls: ['./bubble-maps.component.scss']
})
export class BubbleMapsComponent {
 isShowingMap = true;
 currentImage = 'maps.svg';
  toggleDisplay() {
    this.isShowingMap = !this.isShowingMap;
    this.currentImage = this.isShowingMap ? 'maps.svg' : 'bars.svg';
  }
}
