import { UTChannelsComponent } from './utchannels/utchannels.component';
import { UTHomeComponent } from './uthome/uthome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: UTHomeComponent },
  { path: 'channels', component: UTChannelsComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class UTRoutingModule { }
