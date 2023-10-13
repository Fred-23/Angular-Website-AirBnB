import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from 'src/app/service/accommodation.service';

@Component({
  selector: 'app-detailledpage',
  templateUrl: './detailledpage.component.html',
  styleUrls: ['./detailledpage.component.scss'],
})

export class DetailledpageComponent implements OnInit {
  accommodation: any; // Déclarez le type d'hébergement approprié

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationService // Assurez-vous d'importer le service
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const accommodationId = +params['id']; // Récupérez l'ID de l'hébergement depuis l'URL

      // Utilisez le service pour obtenir les détails de l'hébergement par ID
      this.accommodationService.getAccomodations().subscribe((data) => {
        this.accommodation = data;
      });
    });
  }
}
