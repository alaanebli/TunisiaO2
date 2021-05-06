import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapsModule } from '@angular/google-maps';
import { AddComponent } from './components/add/add.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DataService } from './shared/services/data.service';
import {MaterialModule} from './shared/modules/material.module';
import { LocationDialogComponent } from './components/location-dialog/location-dialog.component' ; 
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavigationComponent,
    AddComponent,
    LocationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBLavjV713JBZEj4Ajyf0huZLjHM_M96d0",
        authDomain: "tunisiao2.firebaseapp.com",
        databaseURL: "https://tunisiao2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "tunisiao2",
        storageBucket: "tunisiao2.appspot.com",
        messagingSenderId: "402836828685",
        appId: "1:402836828685:web:e5c3ffa388c4e3b5011b44",
        measurementId: "G-GWCTPX9KKE"
      }),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
