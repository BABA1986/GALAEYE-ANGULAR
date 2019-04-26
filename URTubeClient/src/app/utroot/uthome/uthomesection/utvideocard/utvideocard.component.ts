import {VideoInfo} from '../../model/category.model';
import {UtsnakbarComponent} from '../../../utsnakbar/utsnakbar.component';
import {Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-utvideocard',
  templateUrl: './utvideocard.component.html',
  styleUrls: ['./utvideocard.component.css']
})
export class UtvideocardComponent implements OnInit {
  @ViewChild(UtsnakbarComponent) mSnakBar:UtsnakbarComponent;
  @Input() mVideoInfo: VideoInfo;
  @Output() mDeleteVideoEventFun = new EventEmitter<VideoInfo>();
  @Output() mEditVideoEventFun = new EventEmitter<VideoInfo>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteCard() {
    this.mSnakBar.openSnakBar();
  }

  snakbarCancelClickedFun() {

  }

  snakbarOkClickedFun() {
    this.mDeleteVideoEventFun.emit(this.mVideoInfo);
  }

  editCard() {
    this.mEditVideoEventFun.emit(this.mVideoInfo);
  }
}
