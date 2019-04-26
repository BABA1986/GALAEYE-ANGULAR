import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export interface ListItem {
  name: string;
  iconpath: string;
  urlpath: string;
}

@Component({
  selector: 'app-utroot',
  templateUrl: './utroot.component.html',
  styleUrls: ['./utroot.component.css']
})

export class UTRootComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  listItems: ListItem[] = [
    {
      name: 'Home',
      iconpath: 'assets/home-ic.png',
      urlpath: '/home'
    },
    {
      name : 'URTube Channels',
      iconpath: 'assets/urtube-ic.png',
      urlpath: '/channels'
    }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
