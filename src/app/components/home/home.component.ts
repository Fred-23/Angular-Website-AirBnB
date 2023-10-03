import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';
import { City } from '../models/City';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accommodation$: Observable<Array<Logement>>;
  listCity$: Observable<Array<City>>;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.accommodation$ = this.accommodationService.getAccomodations();
    this.listCity$= this.accommodationService.getCitiesByName("Nan");
  }
  getImageUrl(base64Image: string): string {
    return `data:image/jpeg;base64,${base64Image}`;
  }
}
