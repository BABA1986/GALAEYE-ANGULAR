import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UTRootComponent } from './utroot.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import { UTHomeComponent } from './uthome/uthome.component';
import { UTChannelsComponent } from './utchannels/utchannels.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UtembededmsgComponent } from './utembededmsg/utembededmsg.component';
import { UtsnakbarComponent } from './utsnakbar/utsnakbar.component';
import { UthomesectionComponent } from './uthome/uthomesection/uthomesection.component';
import { UtvideocardComponent } from './uthome/uthomesection/utvideocard/utvideocard.component';
import { UtaddvideodialogueComponent } from './uthome/utaddvideodialogue/utaddvideodialogue.component';
import { UtaddcategorydialogueComponent } from './uthome/utaddcategorydialogue/utaddcategorydialogue.component';
import { AddchannelmenudialogueComponent } from './utchannels/addchannelmenudialogue/addchannelmenudialogue.component';
import { ChannelCatTabComponent } from './utchannels/channel-cat-tab/channel-cat-tab.component';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
      MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  ],
  entryComponents: [UtaddvideodialogueComponent, UtaddcategorydialogueComponent, AddchannelmenudialogueComponent],
  exports: [UTRootComponent],
  declarations: [UTRootComponent, UTHomeComponent, UTChannelsComponent, UtembededmsgComponent, UthomesectionComponent
    , UtvideocardComponent, UtaddvideodialogueComponent, UtaddcategorydialogueComponent, UtsnakbarComponent, AddchannelmenudialogueComponent, ChannelCatTabComponent,
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UTRootModule {
    constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  } }
