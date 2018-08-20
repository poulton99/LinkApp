import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profiluser } from './profiluser';

@NgModule({
  declarations: [
    Profiluser,
  ],
  imports: [
    IonicPageModule.forChild(Profiluser),
  ],
  exports: [
    Profiluser
  ]
})
export class ProfiluserModule {}
