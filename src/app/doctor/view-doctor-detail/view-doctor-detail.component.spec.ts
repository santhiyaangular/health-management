import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorDetailComponent } from './view-doctor-detail.component';

describe('ViewDoctorDetailComponent', () => {
  let component: ViewDoctorDetailComponent;
  let fixture: ComponentFixture<ViewDoctorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDoctorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
