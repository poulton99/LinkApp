import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Forgot } from './forgot';

@NgModule({
  declarations: [
    Forgot,
  ],
  imports: [
    IonicPageModule.forChild(Forgot),
  ],
  exports: [
    Forgot
  ]
})
export class ForgotModule {}
