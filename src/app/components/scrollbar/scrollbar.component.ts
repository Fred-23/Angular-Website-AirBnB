import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer: ElementRef;

  scrollLeft() {
    // Faites défiler la barre horizontale vers la gauche
    this.scrollContainer.nativeElement.scrollLeft -= 50; // Vous pouvez ajuster la valeur de défilement selon vos besoins
  }

  scrollRight() {
    // Faites défiler la barre horizontale vers la droite
    this.scrollContainer.nativeElement.scrollLeft += 50; // Vous pouvez ajuster la valeur de défilement selon vos besoins
  }
}
