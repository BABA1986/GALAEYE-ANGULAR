import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from './menuservice/menu.service';
import { Menuinfo } from './menumodel/menuinfo.model';
import { Countryinfo } from './menumodel/countryinfo.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddchannelmenudialogueComponent } from './addchannelmenudialogue/addchannelmenudialogue.component';
import { UtsnakbarComponent } from '../utsnakbar/utsnakbar.component';

enum MenuOperation {
  EMenuAddedOp = 1,
  EMenuEditOp,
  EMenuDeletedOp,
  ESubMenuAddedOp,
  ESubMenuEditOp,
  ESubMenuDeleOp,
  ENoneOp
}

export interface ChannelItem {
  name: string;
  channelid: string;
}

@Component({
  selector: 'app-utchannels',
  templateUrl: './utchannels.component.html',
  styleUrls: ['./utchannels.component.css']
})
export class UTChannelsComponent implements OnInit {
  mMenus: Menuinfo[];
  mColumns: number;
  mIsError: boolean;

  constructor(private menuService: MenuService, public dialog: MatDialog) {
    this.mMenus = new Array<Menuinfo>();
    this.mColumns = 4;
  }

  ngOnInit() {
    this.mColumns = 4;
    console.log('Menu before fetch');
    const lCountryInfo = new Countryinfo();
    lCountryInfo.mCountryCode = 'IN';
    this.menuService.getMenus(lCountryInfo).subscribe(countryInfo => {
      console.log(lCountryInfo);
      if(countryInfo != null) {
        this.mMenus = countryInfo.mMenus;
      }
      this.mIsError = (countryInfo === null || this.mMenus.length === 0) ? true : false;
    }, err => {
      console.log('data received with error');
      this.mIsError = false;
    });
  }

  showMenuAddDialogue() {
    this.addEditMenu(null);
  }

  editMenu(event) {
    console.log(event.menuInfo);
    this.addEditMenu(event.menuInfo);
  }

  addEditMenu(menuInfo: Menuinfo) {
    const lMenuTitle = menuInfo === null ? '' : menuInfo.mMenuTitle;
    const dialogRef = this.dialog.open(AddchannelmenudialogueComponent, {
      width: '350px',
      data: {mMenuTitle: lMenuTitle, mAddedMenus: this.mMenus, mIsNotificationOn: false, mAddAfterMenu: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.btnTitle === 'cancel') {
        return;
      }

      let lCountryInfo = new Countryinfo();
      lCountryInfo.mCountryCode = "IN";
      let lMenuInfo = new Menuinfo(menuInfo);
      lCountryInfo.mMenus.push(lMenuInfo);
      lMenuInfo.mMenuTitle = dialogRef.componentInstance.data.mMenuTitle;
      this.menuService.addEditMenus(lCountryInfo).subscribe(response => {
        if(menuInfo != null){
          menuInfo.mMenuTitle = dialogRef.componentInstance.data.mMenuTitle;
          return;
        }
        const lResponse = JSON.parse(JSON.stringify(response));
        const lResponseBody = lResponse.body;
        for(let lMenuInfo of lResponseBody.mMenus) {
          this.mMenus.push(lMenuInfo);
        }
      }, err => {
        console.log('Called Failed');
      });
    });
  }

  handleResponseForMenuOperation(operation: MenuOperation, response: any){
    
  }

  onResize(event) {
    if(event.target.innerWidth < 100) {
      this.mColumns = 1;
    } 
    else if(event.target.innerWidth >= 100 && event.target.innerWidth < 600) {
      this.mColumns = 2;
    }
    else if(event.target.innerWidth >= 600 && event.target.innerWidth < 800) {
      this.mColumns = 3;
    }
    else if(event.target.innerWidth >= 800 && event.target.innerWidth < 1000) {
      this.mColumns = 4;
    }
    else {
      this.mColumns = 5;
    }
  }

}
