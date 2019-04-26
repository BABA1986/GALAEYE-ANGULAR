import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Category, CategoryInfo, VideoInfo } from '../model/category.model';
import { UtsnakbarComponent } from '../../utsnakbar/utsnakbar.component';

@Component({
  selector: 'app-uthomesection',
  templateUrl: './uthomesection.component.html',
  styleUrls: ['./uthomesection.component.css']
})
export class UthomesectionComponent implements OnInit {
  @Input() mCategoryInfo: CategoryInfo;
  @ViewChild(UtsnakbarComponent) mSnakBar:UtsnakbarComponent;
  @Output() mDeleteVideoInSectionFun = new EventEmitter<{categoryInfo: CategoryInfo, videoInfo: VideoInfo}>();
  @Output() mAddEditVideoInSectionDialogueFun = new EventEmitter<{categoryInfo: CategoryInfo, videoInfo: VideoInfo}>();
  @Output() mEditSectionDialogueFun = new EventEmitter<{categoryInfo: CategoryInfo}>();
  @Output() mDeleteCategoryFun = new EventEmitter<{categoryInfo: CategoryInfo}>();

  constructor() { }

  ngOnInit() {
  }

  deletecategory() {
    console.log('Delete Category Encountered');
    this.mSnakBar.openSnakBar();
  }

  deleteVideo(videoInfo: VideoInfo) {
    this.mDeleteVideoInSectionFun.emit({categoryInfo: this.mCategoryInfo, videoInfo: videoInfo});
  }

  editVideo(videoInfo: VideoInfo) {
    this.mAddEditVideoInSectionDialogueFun.emit({categoryInfo: this.mCategoryInfo, videoInfo: videoInfo});
  }

  addNewVideo() {
    this.mAddEditVideoInSectionDialogueFun.emit({categoryInfo: this.mCategoryInfo, videoInfo: null});
  }

  editCategory() {
    this.mEditSectionDialogueFun.emit({categoryInfo: this.mCategoryInfo});
  }

  snakbarOkClickedFun(event) {
    this.mDeleteCategoryFun.emit({categoryInfo: this.mCategoryInfo});
  }
}
