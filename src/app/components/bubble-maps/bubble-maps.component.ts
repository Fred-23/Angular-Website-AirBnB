import { Component } from '@angular/core';

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
