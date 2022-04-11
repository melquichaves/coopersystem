import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stock } from '../../models/domains/stock.model';

@Component({
  selector: 'app-redeem-dialog',
  templateUrl: './redeem-dialog.component.html',
  styleUrls: ['./redeem-dialog.component.scss']
})
export class RedeemDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RedeemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {stocks: Array<Stock>}
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }

}
