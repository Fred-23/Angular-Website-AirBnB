import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Icon } from 'leaflet';
import { Observable } from 'rxjs';
import { Coordinate } from '../models/Coordinate';
import { HttpClient } from '@angular/common/http';
import { SharedVariableService } from 'src/app/service/shared-variable.service';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';

//Description (Api d'OpenStreetMap)
//Ce composant permet d'afficher la carte et d'afficher les marqueurs en fonction de la liste de la carte
//De plus la recherche sémantique, est implémenté cela nous permet de filtrer  les marqueurs en fonction de la recherche dans la searchbar.
//J'ai aussi rajouté le lien vers la deuxième page à la fois dans l'overlay des marqueurs et aussi dans le clique des cards

//Pour les coordonnées géograpgiques, j'ai simuler en mettant ses informations dans un base de données locales.
//Puis je les récupère en fonction du nom de la ville.
//Si plusieurs villes ont le même nom alors je les décale avec un offset.

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  //Modif pour récupérer les données des logement
  accommodation$: Observable<Array<Logement>>;
  oordinatesItems$: Observable<Array<Coordinate>>;
  searchText: string = '';

  private map: L.Map;
  private customIcon: Icon; //Custom Icône de la maison
  private cityMarkers: L.Marker[] = []; // Liste des marqueurs actuellement affichés

  constructor(
    private http: HttpClient,
    private accommodationService: AccommodationService,
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
    //Récupération de l'input du text
    this.searchService.searchText$.subscribe((searchText) => {
      this.searchText = searchText;
      //Ajout des Marqueurs issues de la database
      this.addDatabaseMarkers();
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

    this.addDatabaseMarkers();
  }

  addDatabaseMarkers(): void {
    this.accommodationService
      .getAccomodations()
      .subscribe((data: Array<Logement>) => {
        if (data && Array.isArray(data)) {
          // Effacez les anciens marqueurs de la carte
          this.cityMarkers.forEach((marker) => marker.removeFrom(this.map));
          this.cityMarkers = [];

          const cityCountMap = new Map<string, number>(); // Pour suivre le nombre de villes avec le même nom

          data.forEach((accommodation) => {
            const cityName = accommodation.city.name;
            let cityCount = cityCountMap.get(cityName) || 0; // Obtenir le nombre de villes avec le même nom
            cityCount++;

            // Utilisez la fonction getCoordinates pour récupérer les coordonnées géographiques
            this.accommodationService
              .getCoordinates()
              .subscribe((coordinateData: Array<Coordinate>) => {
                const cityData = coordinateData.find(
                  (coord) => coord.name === cityName
                );
                if (cityData && cityData.Coordinates) {
                  const coords = cityData.Coordinates[0];
                  const lat = parseFloat(coords.lat);
                  const lon = parseFloat(coords.lon);
                  if (this.matchesSearchText(cityData.name)) {
                    if (
                      !isNaN(lat) &&
                      !isNaN(lon) &&
                      isFinite(lat) &&
                      isFinite(lon)
                    ) {
                      // Appliquez un décalage plus important pour espacer davantage les marqueurs
                      const latOffset = 0.02 * cityCount; // Ajustez ce décalage selon vos besoins
                      const lonOffset = 0.02 * cityCount;

                      const stars = '⭐'.repeat(accommodation.rating); // Ajoutez le nombre d'étoiles
                      const priceText = `💰 €${accommodation.price}`; // Ajoutez le prix

                      const popupText = `${cityName} ${cityCount}<br>${stars}<br>${accommodation.rating}<br>${priceText}<br><a href="http://localhost:4200/detailledpage?accommodationId=${accommodation.id}">Cliquez ici pour plus de détails</a>`;
                      const cityMarker = L.marker(
                        [lat + latOffset, lon + lonOffset],
                        {
                          icon: this.customIcon,
                        }
                      ).addTo(this.map);
                      cityMarker.bindPopup(popupText).openPopup();
                      this.cityMarkers.push(cityMarker);
                    }
                  }
                }
              });

            cityCountMap.set(cityName, cityCount); // Mettez à jour le nombre de villes avec le même nom
          });
        }
      });
  }



  //Fonction pour comparer l'input et les noms de la database
  matchesSearchText(accommodationName: string): boolean {
    if (!this.searchText) {
      return true;
    }
    const searchTextLowerCase = this.searchText.toLowerCase();
    return accommodationName.toLowerCase().startsWith(searchTextLowerCase);
  }
}
