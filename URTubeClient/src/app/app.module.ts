import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UTChannelsComponent } from './utroot/utchannels/utchannels.component';
import { UTHomeComponent } from './utroot/uthome/uthome.component';
import { UTRootComponent } from './utroot/utroot.component';
import { UTRootModule } from './utroot/utroot.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    component: UTHomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'channels',
    component: UTChannelsComponent,
    data: { title: 'Channels' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UTRootModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
