import {Component, OnInit, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  mVideoId: string;
  mIsNotificationOn: string;
}

@Component({
  selector: 'app-utaddvideodialogue',
  templateUrl: './utaddvideodialogue.component.html',
  styleUrls: ['./utaddvideodialogue.component.css']
})
export class UtaddvideodialogueComponent implements OnInit {

  mDialogueFormCtr = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    public dialogRef: MatDialogRef<UtaddvideodialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close({btnTitle: 'cancel'});
  }

  onOkClick(): void {
    const lVideoId = this.data.mVideoId;
    if (lVideoId.length <= 0) {
      console.log('Should send notification'+ this.data.mIsNotificationOn);
      this.mDialogueFormCtr.markAsTouched();
      return;
    }
    this.dialogRef.close({btnTitle: 'ok'});
  }
}
