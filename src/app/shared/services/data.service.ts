import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public phone :string = ''; 
  public name :string ='' ; 
  constructor() { }
  
  async sendData(phone : any,name:any){
    this.phone = phone 
    this.name = name 
  }
  
  

}

