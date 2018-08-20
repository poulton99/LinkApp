import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Category } from './category';

@NgModule({
  declarations: [
    Category,
  ],
  imports: [
    IonicPageModule.forChild(Category),
  ],
  exports: [
    Category
  ]
})
export class CategoryModule {}
