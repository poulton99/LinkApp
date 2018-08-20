import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import { Categories } from '../../providers/category';
/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Category {

  mode: String="list";
  category: any;
  articles: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public cate: Categories) {
    this.category= this.navParams.get('item');
    this.selectItem(this.category.name, 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

detail(item){
  this.navCtrl.push('Article', {
    item:item
  });
}
  selectItem(cat, refresher){
  if(refresher != 0)
         refresher.complete();
  	this.articles= this.cate.selectbycat(cat);
  }


  makelist(){
    this.mode="list";
  }

  makecard(){
    this.mode="card";
  }
}
