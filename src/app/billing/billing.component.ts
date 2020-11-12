import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBillingComponent } from '../edit-billing/edit-billing.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billName: string;
  billAmount: number;

  ngOnInit(): void {

  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditBillingComponent, {
      width: '250px',
      data: {billName: this.billName, billAmount: this.billAmount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.billAmount = result;
    });
  }


}
