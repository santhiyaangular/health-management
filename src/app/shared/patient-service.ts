import { PatientModel } from './patient-model';
import { Subject } from 'rxjs';

export class PatientService{
    
    patientSubject = new Subject<PatientModel[]>();

    patientColumnDefs = [
        {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
        {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
        {headerName: 'Visits', field: 'visits', sortable: true, filter: true},
        {headerName: 'Age', field: 'age', sortable: true, filter: true},
        {headerName: 'Physician', field: 'pcp', sortable: true, filter: true},
        {headerName: 'Insurance', field: 'insurance', sortable: true, filter: true}
      ];
    
      patientData =[new PatientModel('John','John',2,36,'Andrew','uhc',0),
                    new PatientModel('Jessin','John',4,7,'Aeron','aetna',0),
                    new PatientModel('Jannis','John',6,5,'Antony','cigna',0),
                    new PatientModel('Jenifer','John',5,33,'Elyse','bluecross',0),
                    new PatientModel( 'Sadeesh','Sadeesh',2,38,'Gerald','aetna',0),
                    new PatientModel('Anita','Sadeesh',8,35,'Micheal','uhc',0),
                    new PatientModel('Prithvi','Sadeesh',3,4,'Connie','cigna',0),
                    new PatientModel('Ram','Ram',7,34,'Andrew','bluecross',0),
                    new PatientModel('Santhiya','Ram',8,28,'Antony','uhc',0),
                    new PatientModel('Madhavan','Ram',5,7,'Aeron','aetna',0),
                    new PatientModel('Mithran','Ram',9,1,'Aeron','aetna',0)
    ];
   
    deletePatient(firstName: string){
        debugger
        this.patientData = this.patientData.filter(patient => patient.firstName !== firstName);
        console.log(this.patientData);
        this.patientSubject.next(this.patientData);
        console.log(this.patientData);
    
    }
    updatePatient(updatedPatient: PatientModel){
        this.patientData = this.patientData.map(patient =>{
            if(patient.firstName === updatedPatient.firstName){
                return updatedPatient;
            }
            else{
                return patient;
            }
            
        });
        this.patientSubject.next(this.patientData);
        console.log(this.patientData);
    }
    
      
}