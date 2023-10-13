import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
//Il s'agit de la page avec l'ensemble des logements, le main
export class MainPageComponent {
  isAppActive = true;
  //Ce toggle nous permet switcher entre l'affichage de la liste et de la map
  toggleApp() {
    this.isAppActive = !this.isAppActive;
  }
}
