import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favorite } from './favorite';

@NgModule({
  declarations: [
    Favorite,
  ],
  imports: [
    IonicPageModule.forChild(Favorite),
  ],
  exports: [
    Favorite
  ]
})
export class FavoriteModule {}
