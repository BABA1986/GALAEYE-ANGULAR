import {Countryinfo} from './countryinfo.model';
import {Submenuinfo} from './submenuinfo.model';

export class Menuinfo {
  mId: number;
  mMenuId: number;
  mMenuIndex: number;
  mMenuTitle: string;
  mMenuIcon: string;
  mSubMenus: Submenuinfo[];

  constructor(menuInfo?: Menuinfo) {
    if(menuInfo == null) return;
    this.mId = menuInfo.mId;
    this.mMenuId = menuInfo.mMenuId;
    this.mMenuIndex = menuInfo.mMenuIndex;
    this.mMenuTitle = menuInfo.mMenuTitle;
    this.mSubMenus = [];
    for(let lSubmenu of menuInfo.mSubMenus)
    {
      let lCopySubmenu = new Submenuinfo(lSubmenu);
      this.mSubMenus.push(lCopySubmenu);
    }
  }

}
