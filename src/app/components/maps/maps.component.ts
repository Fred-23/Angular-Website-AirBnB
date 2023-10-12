import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Icon } from 'leaflet';
import { Observable } from 'rxjs';
import { Coordinate } from '../models/Coordinate';
import { HttpClient } from '@angular/common/http';
import { SharedVariableService } from 'src/app/service/shared-variable.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  searchText: string = '';
  private map: L.Map;
  private customIcon: Icon;
  private cityMarkers: L.Marker[] = []; // Liste des marqueurs actuellement affichés

  constructor(
    private http: HttpClient,
    private searchService: SharedVariableService
  ) {
    this.customIcon = new Icon({
      iconUrl: '../../../assets/assets-airbnb/home.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  }

  ngOnInit(): void {
    this.searchService.searchText$.subscribe((searchText) => {
      this.searchText = searchText;
      this.addMarkers();
    });
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [46.603354, 1.888334],
      zoom: 6,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.addMarkers();
  }

  addMarkers(): void {
    this.http.get(`assets/data/coordinates.js`).subscribe((data: any) => {
      if (data && Array.isArray(data)) {
        // Effacez les anciens marqueurs de la carte
        this.cityMarkers.forEach((marker) => marker.removeFrom(this.map));
        this.cityMarkers = [];

        data.forEach((cityData) => {
          if (cityData.name && cityData.Coordinates) {
            if (this.matchesSearchText(cityData.name)) {
              const coords = cityData.Coordinates[0];
              const lat = parseFloat(coords.lat);
              const lon = parseFloat(coords.lon);
              if (!isNaN(lat) && !isNaN(lon) && isFinite(lat) && isFinite(lon)) {
                const cityMarker = L.marker([lat, lon], {
                  icon: this.customIcon,
                }).addTo(this.map);
                cityMarker.bindPopup(cityData.name).openPopup();
                this.cityMarkers.push(cityMarker);
              }
            }
          }
        });
      }
    });
  }

  matchesSearchText(accommodationName: string): boolean {
    if (!this.searchText) {
      return true;
    }
    const searchTextLowerCase = this.searchText.toLowerCase();
    return accommodationName.toLowerCase().startsWith(searchTextLowerCase);
  }
}
