import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  private map: L.Map;
  private franceCenter: L.LatLngExpression = [46.603354, 1.888334]; // Coordonnées du centre de la France

  private initMap(): void {
    this.map = L.map('map', {
      center: this.franceCenter,
      zoom: 6 // Niveau de zoom initial (ajustez-le selon vos besoins)
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2, // Réglez la valeur minimale du zoom pour voir la France entière
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}


// https://www.youtube.com/watch?v=lkIRttJimsY //Link of the tutorial