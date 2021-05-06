import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Phone = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
    Validators.minLength(8),
  ]);

  Name = new FormControl('', [
    Validators.maxLength(30)
  ]);


  constructor(public ds : DataService, public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  
  openSelect() {
      const dialogRef = this.dialog.open(LocationDialogComponent, {
        width: '100%',
        panelClass: 'custom-modalbox'
    });
  }

}
