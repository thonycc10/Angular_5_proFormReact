import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit() {
  }

  onClosedConfirm() {
    this.thisDialogRef.close('Confirmar');
  }

  onClosedCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
