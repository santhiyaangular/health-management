import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { FormGroup, FormControl } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor-service';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  isLinear = false;
  addDoctor: DoctorModel;
  public newDoctorForm: FormGroup;


  constructor(private doctorService: DoctorService,
              public dialogRef: MatDialogRef<AddDoctorComponent>) { }


  ngOnInit() {
    this.newDoctorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      rating: new FormControl(0),
      age: new FormControl(0),
      experience: new FormControl(0),
      insurance: new FormControl('')
    });
  }


  onNewDoctor(newDoctor: any) {
    this.addDoctor = new DoctorModel(
      newDoctor.firstName,
      newDoctor.lastName,
      +newDoctor.rating,
      +newDoctor.age,
      +newDoctor.experience,
      newDoctor.insurance,
      newDoctor.action);

    this.dialogRef.close(this.addDoctor);
  }

}
