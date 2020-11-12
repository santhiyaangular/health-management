import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient-service';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { PatientModel } from 'src/app/shared/patient-model';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
patientList = [];
patient: PatientModel;
  constructor(private patientService: PatientService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.patientList = this.patientService.patientData;
    this.patientService.patientSubject.subscribe(patients => {
      this.patientList = patients;
      // console.log(this.patientList);
    })
  }
 openAddDialog(){
    const addDialogRef = this.dialog.open(AddPatientComponent,{
      width: '600px',height: '400px',
     
    });
    addDialogRef.afterClosed().subscribe(result => {
      this.patient = result;
      this.patientService.patientData.push(this.patient);
      console.log(this.patient);
    })
  }
}
