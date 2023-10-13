import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-detailledpage',
  templateUrl: './detailledpage.component.html',
  styleUrls: ['./detailledpage.component.scss'],
})
//Il s'agit de la page détaillée pour un logement
export class DetailledpageComponent implements OnInit {
  accommodation$: Observable<Array<Logement>>;
  accommodationId: number;

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationService // Assurez-vous d'importer le service
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.accommodationId = +params['accommodationId']; // Récupérez l'ID de l'hébergement depuis l'URL
      console.log('Variable reçue :', this.accommodationId);

      // Cette fonction permet de filtrez les hébergements en fonction de l'ID
      this.accommodation$ = this.accommodationService.getAccomodations()
        .pipe(map(accommodations => accommodations.filter(acc => acc.id === this.accommodationId)));
    });
  }
}
