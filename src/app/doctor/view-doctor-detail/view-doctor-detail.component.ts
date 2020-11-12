import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';

@Component({
  selector: 'app-view-doctor-detail',
  templateUrl: './view-doctor-detail.component.html',
  styleUrls: ['./view-doctor-detail.component.css']
})
export class ViewDoctorDetailComponent implements OnInit {
  public doctorForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<ViewDoctorDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DoctorModel) { }

  ngOnInit(): void {
    this.doctorForm = new FormGroup({
      firstName: new FormControl({value: this.data.firstName, disabled: true}),
      // firstName: new FormControl(this.data.firstName),
      lastName: new FormControl({value: this.data.lastName, disabled: true}),
      rating: new FormControl({value:this.data.rating, disabled: true}),
      age: new FormControl({value:this.data.age, disabled: true}),
      experience: new FormControl({value:this.data.experience, disabled: true}),
      insurance: new FormControl({value:this.data.insurance, disabled: true})
    });
  }

}
