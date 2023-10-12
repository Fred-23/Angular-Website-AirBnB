import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent {

  imageList: { src: string }[] = [
    { src: '../../assets/assets_scrollbar/File1.jpg' },
    { src: '../../assets/assets_scrollbar/File2.jpg' },
    { src: '../../assets/assets_scrollbar/File3.jpg' },
    { src: '../../assets/assets_scrollbar/File4.jpg' },
    { src: '../../assets/assets_scrollbar/File5.jpg' },
    { src: '../../assets/assets_scrollbar/File6.jpg' },    
    { src: '../../assets/assets_scrollbar/File7.jpg' },
    { src: '../../assets/assets_scrollbar/File8.jpg' },
    { src: '../../assets/assets_scrollbar/File9.jpg' },
    { src: '../../assets/assets_scrollbar/File10.jpg' },
    { src: '../../assets/assets_scrollbar/File11.jpg' },
    { src: '../../assets/assets_scrollbar/File12.jpg' },   
    { src: '../../assets/assets_scrollbar/File13.jpg' },
    { src: '../../assets/assets_scrollbar/File14.jpg' },
    { src: '../../assets/assets_scrollbar/File15.jpg' },
    { src: '../../assets/assets_scrollbar/File16.jpg' },
    { src: '../../assets/assets_scrollbar/File1.jpg' },
    { src: '../../assets/assets_scrollbar/File2.jpg' },
    { src: '../../assets/assets_scrollbar/File3.jpg' },
    { src: '../../assets/assets_scrollbar/File4.jpg' },
    { src: '../../assets/assets_scrollbar/File5.jpg' },
    { src: '../../assets/assets_scrollbar/File6.jpg' },    
    { src: '../../assets/assets_scrollbar/File7.jpg' },
    { src: '../../assets/assets_scrollbar/File8.jpg' },
    { src: '../../assets/assets_scrollbar/File9.jpg' },
    { src: '../../assets/assets_scrollbar/File10.jpg' },
    { src: '../../assets/assets_scrollbar/File11.jpg' },
    { src: '../../assets/assets_scrollbar/File12.jpg' },   
    { src: '../../assets/assets_scrollbar/File13.jpg' },
    { src: '../../assets/assets_scrollbar/File14.jpg' },
    { src: '../../assets/assets_scrollbar/File15.jpg' },
    { src: '../../assets/assets_scrollbar/File16.jpg' },
  ];

  @ViewChild('scrollContainer', { static: false }) scrollContainer: ElementRef;

  scrollLeft() {
    console.log("Left")
    this.scrollContainer.nativeElement.scrollLeft -= 800; // Vous pouvez ajuster la valeur de défilement selon vos besoins
  }

  scrollRight() {
    console.log("Right")
    this.scrollContainer.nativeElement.scrollLeft += 800; // Vous pouvez ajuster la valeur de défilement selon vos besoins
  }
}
