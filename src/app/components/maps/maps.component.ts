import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Icon } from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {
  
  private map: L.Map;
  private franceCenter: L.LatLngExpression = [46.603354, 1.888334]; // Coordonnées du centre de la France
  private nantesCoords: L.LatLngExpression = [47.218372, -1.553621]; // Coordonnées de Nantes
  private parisCoords: L.LatLngExpression = [48.8566, 2.3522]; // Coordonnées de Paris

  private initMap(): void {
    this.map = L.map('map', {
      center: this.franceCenter,
      zoom: 6 // Niveau de zoom initial (ajustez-le selon vos besoins)
    });
    const customIcon = new Icon({
      iconUrl: '../../../assets/assets-airbnb/home.svg', 
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32] 
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2, // Réglez la valeur minimale du zoom pour voir la France entière
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


    //afficher en fonction de la ville



    const nantesMarker = L.marker((this.nantesCoords), { icon: customIcon }).addTo(this.map);
   nantesMarker.bindPopup('Nantes').openPopup();

    const parisMarker = L.marker((this.parisCoords), { icon: customIcon }).addTo(this.map);
    parisMarker.bindPopup('Paris').openPopup();
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}


// https://www.youtube.com/watch?v=lkIRttJimsY //Link of the tutorial