import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Menuinfo } from '../menumodel/menuinfo.model';
import { UtsnakbarComponent } from '../../utsnakbar/utsnakbar.component';
import { EventEmitter } from '@angular/core';
import { ChannelItem } from '../utchannels.component';

@Component({
  selector: 'app-channel-cat-tab',
  templateUrl: './channel-cat-tab.component.html',
  styleUrls: ['./channel-cat-tab.component.css']
})
export class ChannelCatTabComponent implements OnInit {
  @Input()  mMemuInfo: Menuinfo;
  @ViewChild(UtsnakbarComponent) mSnakBar:UtsnakbarComponent;
  @Output() mEditMenuEventFun = new EventEmitter<{menuInfo: Menuinfo}>();

  constructor() { }

  ngOnInit() {
  }
  
  deletecategory() {
    this.mSnakBar.openSnakBar();
  }

  editCategory() {
    this.mEditMenuEventFun.emit({menuInfo: this.mMemuInfo});
  }
}
