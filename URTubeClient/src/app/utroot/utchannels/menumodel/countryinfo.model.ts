import {Menuinfo} from './menuinfo.model';

export class Countryinfo {
  mId: number;
  mCountryId: number;
  mCountryCode: string;
  mMenus: Menuinfo[];

  constructor() {
    this.mMenus = new Array<Menuinfo>();
  }
}
