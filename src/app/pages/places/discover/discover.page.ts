import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/interfaces';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[] = [];

  constructor(private placesService: PlaceService) {}

  ngOnInit() {
    this.places = this.placesService.place;
    console.log(this.places);
  }
}
