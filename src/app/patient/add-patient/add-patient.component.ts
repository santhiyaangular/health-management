import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient-model';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
patient = new PatientModel('','',0,0,'','',0);
firstName: string;
lastName: string;
visits: number;
age: number;
pcp: string;
insurance: string;
  constructor(public dialogRef: MatDialogRef<AddPatientComponent>) { }
    // data: {firstName: this.firstName, lastName: this.lastName, visits: this.visits, age: this.age, pcp: this.pcp, insurance: this.insurance}

  ngOnInit(): void {
    
  }
  onAddPatient(){
    
    this.dialogRef.close();
  }
}
