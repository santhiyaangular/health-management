import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-list-item',
  templateUrl: './doctor-list-item.component.html',
  styleUrls: ['./doctor-list-item.component.css']
})
export class DoctorListItemComponent implements OnInit {
@Input() doctor;
  constructor() { }

  ngOnInit(): void {
  }

}
