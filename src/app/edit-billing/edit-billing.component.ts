import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillingModel } from 'src/app/shared/billing.model';


@Component({
  selector: 'app-edit-billing',
  templateUrl: './edit-billing.component.html',
  styleUrls: ['./edit-billing.component.css']
})
export class EditBillingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditBillingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BillingModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }
}
