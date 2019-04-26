import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utembededmsg',
  templateUrl: './utembededmsg.component.html',
  styleUrls: ['./utembededmsg.component.css']
})
export class UtembededmsgComponent implements OnInit {
  @Input() mTitle: String;
  @Input() mDesc: String;
  @Input() mImagePath: String;
  @Input() mMessagePosition: String; // position of msg, Could be fixed, ralative, absolute etc

  constructor() { }

  ngOnInit() {
  }

}
