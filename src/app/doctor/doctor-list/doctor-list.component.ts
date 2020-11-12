import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor-service';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDoctorComponent } from '../delete-doctor/delete-doctor.component';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { ViewDoctorDetailComponent } from '../view-doctor-detail/view-doctor-detail.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  displayedColumns = [];
  doctorColumnDefs = [];
  doctorData = [];
  dataSource = new MatTableDataSource<DoctorModel>();
  constructor(private doctorService: DoctorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.doctorService.getDoctorData();
    this.displayedColumns = this.doctorService.displayedColumn;
    this.doctorData = this.doctorService.getDoctorData();
    this.doctorColumnDefs = this.doctorService.doctorColumnDefs;
    
    
    this.doctorService.refreshDoctors.subscribe(doctors => {
      this.dataSource.data = doctors;
      console.log(this.dataSource.data);
    });
   }
   onUpdateOpenDialog(selectedDoctor: DoctorModel){
    const updateDialogRef = this.dialog.open(UpdateDoctorComponent, {
      height: '80%',
      width: '40%',
      data: selectedDoctor
    });
    updateDialogRef.afterClosed().subscribe(result => {
      // debugger
      this.doctorService.updateDoctorDetail(result);
      console.log(result);
    });
   }
   onDeleteOpenDialog(selectedDoctor: DoctorModel){
    const deleteDialogRef = this.dialog.open(DeleteDoctorComponent,{
      data: selectedDoctor
    });
   }
   onAddDoctor(){
     const addDialogRef = this.dialog.open(AddDoctorComponent,{
      height: '80%',
      width: '40%'
     })
     addDialogRef.afterClosed().subscribe(result => {
      this.doctorService.addNewDoctor(result);
      console.log(result);
    });
   }
   onViewDoctorDetail(selectedDoctor: DoctorModel){
     const viewDialogRef = this.dialog.open(ViewDoctorDetailComponent,{
       height: '80%',
       width: '40%',
       data: selectedDoctor
     })
   }
}
