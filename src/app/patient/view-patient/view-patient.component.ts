import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatePatientComponent } from '../update-patient/update-patient.component';
import { PatientModel } from 'src/app/shared/patient-model';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PatientModel) { }

  ngOnInit(): void {
  }

}
