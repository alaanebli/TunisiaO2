import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {

  constructor(public loc: LocationService) { }

  ngOnInit(): void {
  }

}
