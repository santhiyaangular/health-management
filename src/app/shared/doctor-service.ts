import { DoctorModel } from 'src/app/shared/doctor.model';
import { Subject } from 'rxjs';

export class DoctorService{
  refreshDoctors = new Subject<DoctorModel[]>();
    
    displayedColumn = ['FirstName','LastName','Rating','Age','Update'] ; 

    doctorColumnDefs = [
        {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
        {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
        {headerName: 'Rating', field: 'rating', sortable: true, filter: true},
        {headerName: 'Age', field: 'age', sortable: true, filter: true},
        {headerName: 'Experience', field: 'experience', sortable: true, filter: true},
        {headerName: 'Insurance', field: 'insurance', sortable: true, filter: true},
        {headerName: 'Action', field:'action', sortable: true, filter: true}
      ];
      doctorData = [
        new DoctorModel('Gregory','Lam',5,45,10,'uhc',''),
        new DoctorModel('Aeron','Shaftel',4,51,15,'aetna',''),
        new DoctorModel('Connie','Gowrich',5,55,12,'cigna',''),
        new DoctorModel('Andrew','Jofrdon',2,43,14,'bluecross',''),
        new DoctorModel('Antony','Phillips',5,50,13,'uhc',''),
        new DoctorModel('Gerald','Arnett',3,49,12,'aetna',''),
        new DoctorModel('James','Babu',4,55,12,'cigna',''),
        new DoctorModel('Jai','Shankar',2,46,14,'bluecross',''),
        new DoctorModel('Hari','Haran',5,50,13,'uhc',''),
        new DoctorModel('Sam','Rajan',4,49,12,'aetna',''),
      ];

      getDoctorData(){
        return this.doctorData;
      }
      updateDoctorDetail(selectedDoctor: DoctorModel){
        // debugger
        this.doctorData = this.doctorData.map(doctor => {
          if(doctor.firstName === selectedDoctor.firstName){
            return selectedDoctor;
          }else{
            return doctor;
          }
        });
        this.refreshDoctors.next(this.doctorData);
        console.log(this.doctorData);

      }
      removeDoctor(data: DoctorModel){
        this.doctorData = this.doctorData.filter(doctor => doctor.firstName !== data.firstName);
        this.refreshDoctors.next(this.doctorData)

      }
      addNewDoctor(newDoctor: DoctorModel){
        this.doctorData.push(newDoctor);
        this.refreshDoctors.next(this.doctorData);
      }
}