import {trigger, transition, style, animate} from '@angular/animations';
import {Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utsnakbar',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(100%)'}))
      ])
    ])
  ],
  templateUrl: './utsnakbar.component.html',
  styleUrls: ['./utsnakbar.component.css']
})
export class UtsnakbarComponent implements OnInit {
  mShowConfirmAlert: boolean;
  @Output() mOkClickedFun = new EventEmitter<boolean>();
  @Output() mCancelClickedFun = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  openSnakBar() {
    this.mShowConfirmAlert = true;
  }

  cancelDeleteCard() {
    this.mCancelClickedFun.emit(true);
    this.mShowConfirmAlert = false;
  }

  confirmDeleteCard() {
    this.mOkClickedFun.emit(true);
    this.mShowConfirmAlert = false;
  }
}
