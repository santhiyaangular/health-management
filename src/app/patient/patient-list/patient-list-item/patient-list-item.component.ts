import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePatientComponent } from '../../update-patient/update-patient.component';
import { AddPatientComponent } from '../../add-patient/add-patient.component';
import { PatientDeleteComponent } from '../../patient-delete/patient-delete.component';
import { PatientModel } from 'src/app/shared/patient-model';
import { PatientService } from 'src/app/shared/patient-service';
import { ViewPatientComponent } from '../../view-patient/view-patient.component';

@Component({
  selector: 'app-patient-list-item',
  templateUrl: './patient-list-item.component.html',
  styleUrls: ['./patient-list-item.component.css']
})
export class PatientListItemComponent implements OnInit {
@Input() patient: PatientModel;
firstName: string;
age: number;
pcp: string;
newPatient = new PatientModel('','',0,0,'','',0);
  constructor(public dialog: MatDialog, public patientService: PatientService) { }

  ngOnInit(): void {
    

  }
  openUpdateDialog(){
    // debugger
    const updateDialogRef = this.dialog.open(UpdatePatientComponent, {
      width: '300px',
      // data: {firstName: this.patient.firstName, age: this.patient.age, pcp: this.patient.pcp}
      data: this.patient
    });
    updateDialogRef.afterClosed().subscribe(result => {
      this.patientService.updatePatient(result);
      console.log(result);
    });
  }
  openDeleteDialog(){
    const deleteDialogRef = this.dialog.open(PatientDeleteComponent,{
      // data: {firstName: this.patient.firstName}
      data: this.patient.firstName
    });
    
    deleteDialogRef.afterClosed().subscribe(result => {
      this.patient.firstName = result;
      // debugger
      console.log(this.patient.firstName);
      this.patientService.deletePatient(this.patient.firstName)
      
    });
    
  }
  openViewDialog(){
    const viewDialogRef = this.dialog.open(ViewPatientComponent,{
      data: this.patient
    })
  }
}
