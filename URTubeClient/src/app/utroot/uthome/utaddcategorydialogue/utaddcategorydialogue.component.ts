import { CategoryInfo } from '../model/category.model';
import { DialogData } from '../utaddvideodialogue/utaddvideodialogue.component';
import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';

export interface CategoryDialogData {
  mCategoryTitle: string;
  mAddedCatagories: CategoryInfo[];
  mIsNotificationOn: string;
  mAddAfterCategory: CategoryInfo;
}

@Component({
  selector: 'app-utaddcategorydialogue',
  templateUrl: './utaddcategorydialogue.component.html',
  styleUrls: ['./utaddcategorydialogue.component.css']
})
export class UtaddcategorydialogueComponent implements OnInit {

 mDialogueFormCtr = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    public dialogRef: MatDialogRef<UtaddcategorydialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDialogData) {}

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close({btnTitle: 'cancel'});
  }

  onOkClick(): void {
    const lCategoryTitle = this.data.mCategoryTitle;
    if (lCategoryTitle.length <= 0) {
      this.mDialogueFormCtr.markAsTouched();
      return;
    }
    this.dialogRef.close({btnTitle: 'ok'});
  }

}
