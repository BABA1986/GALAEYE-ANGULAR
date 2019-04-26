import {Menuinfo} from './menuinfo.model';

export class Submenuinfo {
  mId: number;
  mSubMenuId: number;
  mSubMenuTitle: string;
  mSubMenuIcon: string;
  mMediaType: number;
  mMediaSrc: string;
  mMediaSrcType: number;

  constructor(submenuInfo?: Submenuinfo) {
    if(submenuInfo == null) return;
    this.mId = submenuInfo.mId;
    this.mSubMenuId = submenuInfo.mSubMenuId;
    this.mSubMenuTitle = submenuInfo.mSubMenuTitle;
    this.mSubMenuIcon = submenuInfo.mSubMenuIcon;
    this.mMediaType = submenuInfo.mMediaType;
    this.mMediaSrc = submenuInfo.mMediaSrc;
    this.mMediaSrcType = submenuInfo.mMediaSrcType;
  }
}
