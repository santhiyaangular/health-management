import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientListItemComponent } from './patient/patient-list/patient-list-item/patient-list-item.component';
import { PatientService } from 'src/app/shared/patient-service';
import { Routes, RouterModule } from '@angular/router';
import { UpmcMaterialModule } from 'src/app/upmc-material.module';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorListItemComponent } from './doctor/doctor-list/doctor-list-item/doctor-list-item.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './doctor/delete-doctor/delete-doctor.component';
import { DoctorService } from './shared/doctor-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { AgGridModule } from 'ag-grid-angular';
import { ViewDoctorDetailComponent } from './doctor/view-doctor-detail/view-doctor-detail.component';
import { ViewPatientComponent } from './patient/view-patient/view-patient.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [
  {path:'', redirectTo:'doctor-list', pathMatch:'full'},
  {path:'patient-list', component: PatientListComponent},
  {path:'doctor-list', component: DoctorListComponent},
  {path:'billing', component: BillingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientDeleteComponent,
    UpdatePatientComponent,
    AddPatientComponent,
    PatientListItemComponent,
    DoctorComponent,
    DoctorListComponent,
    DoctorListItemComponent,
    UpdateDoctorComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    BillingComponent,
    EditBillingComponent,
    ViewDoctorDetailComponent,
    ViewPatientComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UpmcMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [PatientService, DoctorService],
  bootstrap: [AppComponent],
  entryComponents: [AddDoctorComponent]
})
export class AppModule { }
