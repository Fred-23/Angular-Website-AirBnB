import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationService } from 'src/app/service/accommodation.service';
import { Logement } from 'src/app/components/models/Logement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accommodation$: Observable<Array<Logement>>;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.accommodation$ = this.accommodationService.getAccomodations();
  }
  getImageUrl(base64Image: string): string {
    return `data:image/jpeg;base64,${base64Image}`;
  }
}
