import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient-model';
@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
patient: PatientModel;
  constructor(public dialogRef: MatDialogRef<PatientDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PatientModel) { }

  ngOnInit(): void {
  }

}
