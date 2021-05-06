import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public lat: number | undefined;
  public lng: number | undefined;

  constructor(private db: AngularFireDatabase,public ds : DataService) { }

  async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.position(this.lat,this.lng)
          console.log(this.lat,this.lng)
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  position(lat:any,lng:any){
    let phone,qte ; 
    phone = this.ds.phone ; 
    qte = this.ds.name ;
    this.ds.phone = '' ; 
    this.ds.name ='';  
    if (phone !='' && qte !=''){
      const val = {
        id:0,
        latitude: lat,
        longitude:lng ,
        number:phone,
        name:qte
      }
      console.log(phone,qte)
      this.db.list('/').push(val) ; 
  
    }else{
        alert('Please fill The Form') ; 
    }
  }
 
}
