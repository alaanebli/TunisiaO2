import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import  {of,Observable, Subject} from 'rxjs' ; 
import  {catchError,map} from 'rxjs/operators' ; 
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { Int } from 'src/app/shared/services/data';
import { async } from '@angular/core/testing';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  apiLoaded : Observable<boolean> | undefined ; 
  data: Observable<any> | undefined ; 
  mapOptions: google.maps.MapOptions = {
    center: {lat:36.833374299999996,lng:10.1387624},
    zoom: 7,
    streetViewControl:false,
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl:false,
  };
  
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    clickable:true,
  };

  markerPositions: any;
  content: string | undefined;
  
  async fetchData(){
    this.db.list('/').valueChanges().subscribe((e)=> {
       this.markerPositions = e ; 
       console.log(this.markerPositions)
    })
  }

 
 

  addMarker(e: google.maps.MapMouseEvent) {  
    
    let phone,qte ; 
  
    phone = this.ds.phone ; 
    qte = this.ds.name ;
    this.ds.phone = '' ; 
    this.ds.name ='';  
    if (phone !='' && qte !=''){
      const val = {
        id:0,
        latitude: e.latLng.toJSON().lat,
        longitude: e.latLng.toJSON().lng,
        number:phone,
        name:qte
      }
      console.log(phone,qte)
      this.db.list('/').push(val) ; 
  
    }else{
        alert('Please fill The Form') ; 
    }  
  }
  
  openInfoWindow(marker: MapMarker) {
    console.log(marker.getPosition()?.toJSON().lat)
    
    this.markerPositions.forEach((val: any) => {
      if (val.latitude == marker.getPosition()?.toJSON().lat &&  val.longitude == marker.getPosition()?.toJSON().lng ){
        this.content = ('\n'+val.name+' \n   \n'+val.number) 
      }
    });
    this.infoWindow?.open(marker);
  }

  constructor(http:HttpClient,public dialog: MatDialog,private db: AngularFireDatabase,public ds : DataService,public loc:LocationService) { 
    this.apiLoaded= http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBLavjV713JBZEj4Ajyf0huZLjHM_M96d0&callback=initMap&libraries=&v=weekly&language=en&region=JP','callback')
    .pipe(map(()=> true),catchError(()=> of(false)))
  }
  
  ngOnInit(): void {
   this.fetchData()
  } 

 
  ngAfterViewInit() {
    
  }


 
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '100%',
      panelClass: 'custom-modalbox'
  });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    
  }
}
