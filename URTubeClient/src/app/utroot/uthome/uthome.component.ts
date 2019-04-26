import {UtaddvideodialogueComponent} from './utaddvideodialogue/utaddvideodialogue.component';
import {Category, CategoryInfo, VideoInfo, VideoPageCursor} from './model/category.model';
import {Countryinfo} from '../utchannels/menumodel/countryinfo.model';
import {MediaMatcher} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from './service/category.service';
import { UtaddcategorydialogueComponent } from './utaddcategorydialogue/utaddcategorydialogue.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';

export interface ChannelItem {
  name: string;
  channelid: string;
}

@Component({
  selector: 'app-uthome',
  templateUrl: './uthome.component.html',
  styleUrls: ['./uthome.component.css']
})

export class UTHomeComponent implements OnInit {
  mCategories: CategoryInfo[];
  mIsError: boolean;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {}

  ngOnInit() {
    console.log('Category before fetch');
    const lCountryInfo = new Countryinfo();
    lCountryInfo.mCountryCode = 'IND';
    this.categoryService.getCategories(lCountryInfo, catagories => {
      this.mCategories = catagories;
      this.mIsError = (this.mCategories.length === 0) ? true : false;
    });
  }

  deleteVideo(event) {
    console.log(event.videoInfo);
    console.log(event.categoryInfo);

    const lVideos: VideoInfo[] = new Array<VideoInfo>();
    lVideos.push(event.videoInfo);
    this.categoryService.deleteVideos(lVideos).subscribe(catagories => {
      console.log('Called Success');
      const lFoundAtIndex = event.categoryInfo.mVideos.indexOf(event.videoInfo);
      console.log('Found at index = ' + lFoundAtIndex);
      event.categoryInfo.mVideos.splice(lFoundAtIndex, 1);
      console.log('After Delete = ' + event.categoryInfo.mVideos);
    }, err => {
      console.log('Called Failed');
    });
  }

  showAddEditVideoDialogue(event) {
    console.log(event.categoryInfo);
    console.log(event.videoInfo);
    const lVideoId = event.videoInfo === null ? '' : event.videoInfo.mVideoId;
    const dialogRef = this.dialog.open(UtaddvideodialogueComponent, {
      width: '350px',
      data: {mVideoId: lVideoId, mIsNotificationOn: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.btnTitle === 'cancel') {
        return;
      }
      const lVideos: VideoInfo[] = new Array<VideoInfo>();
      let lVideoInfo = event.videoInfo;
      if (lVideoInfo === null) {
        lVideoInfo = new VideoInfo();
        lVideoInfo.mCategoryId = event.categoryInfo.mCategory.mCategoryId;
      }
      lVideoInfo.mVideoId = dialogRef.componentInstance.data.mVideoId;
      lVideos.push(lVideoInfo);
      this.categoryService.addVideos(lVideos).subscribe(response => {
        console.log('The dialog was closed');
        if (event.videoInfo === null) {
          const lResponse = JSON.parse(JSON.stringify(response));
          const lAddedVideos = lResponse.body;
          for (let lAddedIndex = 0; lAddedIndex < lAddedVideos.length; ++lAddedIndex) {
            const lAddedVideo = lAddedVideos[lAddedIndex];
            for (let lIndex = 0; lIndex < lVideos.length; ++lIndex) {
             if (lAddedVideo.mVideoId === lVideos[lIndex].mVideoId) {
                event.categoryInfo.mVideos.unshift(lAddedVideo);
              }
            }
          }
        } else {
         event.videoInfo.mVideoId = lVideoInfo.mVideoId;
        }
      }, err => {
        console.log('Called Failed');
      });
    });
  }

  showCategoryEditDialogue(event) {
    this.addEditCategory(event.categoryInfo);
  }

  showCategoryAddDialogue() {
    this.addEditCategory(null);
  }

  previousCategoryOf(categoryInfo: CategoryInfo): CategoryInfo {
      if (categoryInfo === null) {
        return null;
      }
      
      let lLastCategory = null;
      for (let lIndex = 0; lIndex < this.mCategories.length; ++lIndex) {
        if (categoryInfo === this.mCategories[lIndex]) {
          break;
        }
        lLastCategory = this.mCategories[lIndex];
      }
      return lLastCategory;
  }

  addEditCategory(categoryInfo: CategoryInfo) {
    const lCategoryTitle = categoryInfo === null ? '' : categoryInfo.mCategory.mCategoryName;
    const dialogRef = this.dialog.open(UtaddcategorydialogueComponent, {
      width: '350px',
      data: {mCategoryTitle: lCategoryTitle, mAddedCatagories: this.mCategories, mCountryCodes: ['IND', 'CHN', 'USA'], mIsNotificationOn: false, mAddAfterCategory: this.previousCategoryOf(categoryInfo)}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.btnTitle === 'cancel') {
        return;
      }
      let lCategory = (categoryInfo === null) ? null : categoryInfo.mCategory;
      if (categoryInfo == null) {
        lCategory = new Category();
        lCategory.mCountryCode = 'IND'; 
      }
      lCategory.mCategoryName = dialogRef.componentInstance.data.mCategoryTitle;
      let lSelectedCategory = dialogRef.componentInstance.data.mAddAfterCategory;
      let lIndex = this.mCategories.indexOf(lSelectedCategory);
      lCategory.mCategoryIndex = (lIndex == -1) ? 0 : lIndex+1;
      this.categoryService.addEditCategory(lCategory).subscribe(response => {
        if (categoryInfo == null) {
          const lResponse = JSON.parse(JSON.stringify(response));
          const lAddedCategory = lResponse.body;
          lCategory.mCategoryId = lAddedCategory.mCategoryId;
          let lCategoryInfo = new CategoryInfo();
          lCategoryInfo.mCategory = lCategory;
          lCategoryInfo.mPageCursor = new VideoPageCursor();
          lCategoryInfo.mVideos = new Array<VideoInfo>();
          this.mCategories.splice(lAddedCategory.mCategoryIndex, 0, lCategoryInfo);
          console.log(this.mCategories);
        }
        else {
          categoryInfo.mCategory.mCategoryName = lCategory.mCategoryName;
          console.log(this.mCategories);
        }
        this.mIsError = (this.mCategories.length === 0) ? true : false;
      }, err => {
        console.log('Called Failed');
      });
    });
  }

  deleteCategoryFun(event) {
    console.log(event.categoryInfo);
    this.categoryService.deleteCategory(event.categoryInfo.mCategory).subscribe(catagories => {
      console.log('Called Success');
      const lFoundAtIndex = this.mCategories.indexOf(event.categoryInfo);
      console.log('Found at index = ' + lFoundAtIndex);
      this.mCategories.splice(lFoundAtIndex, 1);
      console.log('After Delete = ' + this.mCategories);
    }, err => {
      console.log('Called Failed');
    });
  }
}
