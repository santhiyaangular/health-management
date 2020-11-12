import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { DoctorService } from 'src/app/shared/doctor-service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DoctorModel,
    private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteDoctor(data: DoctorModel) {
    this.doctorService.removeDoctor(data);
    this.dialogRef.close();
  }
}
