import { Component, OnInit, Inject } from '@angular/core';
import { Menuinfo } from '../menumodel/menuinfo.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ChannelMenuDialogData {
  mMenuTitle: string;
  mAddedMenus: Menuinfo[];
  mIsNotificationOn: string;
  mAddAfterMenu: Menuinfo;
}

@Component({
  selector: 'app-addchannelmenudialogue',
  templateUrl: './addchannelmenudialogue.component.html',
  styleUrls: ['./addchannelmenudialogue.component.css']
})
export class AddchannelmenudialogueComponent implements OnInit {
  mDialogueFormCtr = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddchannelmenudialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChannelMenuDialogData) {}

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close({btnTitle: 'cancel'});
  }

  onOkClick(): void {
    const lMenuTitle = this.data.mMenuTitle;
    if (lMenuTitle.length <= 0) {
      this.mDialogueFormCtr.markAsTouched();
      return;
    }
    this.dialogRef.close({btnTitle: 'ok'});
  }
}
