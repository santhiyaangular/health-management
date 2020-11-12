import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  public doctorForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<UpdateDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DoctorModel) { }

   
  ngOnInit() {
    this.doctorForm = new FormGroup({
      // firstName: new FormControl({value: this.data.firstName, disabled: true}),
      // lastName: new FormControl({value: this.data.lastName, disabled: false}),
      // rating: new FormControl({value: this.data.rating, disabled: false}),
      // age: new FormControl({value: this.data.age, disabled: false}),
      // experience: new FormControl({value: this.data.experience, disabled: false}),
      // insurance: new FormControl({value: this.data.insurance, disabled: false})

      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      rating: new FormControl(this.data.rating),
      age: new FormControl(this.data.age),
      experience: new FormControl(this.data.experience),
      insurance: new FormControl(this.data.insurance)
    });
  }
  saveDoctorDetail(formData: any) {
    this.dialogRef.close(formData);
    console.log(formData);
  }
}
