import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import { Categories } from '../../providers/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page: any;
  articles:any;
  mode: String="list";
  constructor(public navCtrl: NavController,  public service: Service, public cat: Categories, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController) {
    this.getArticles(0);
    this.page=0;
  }

  ionViewDidEnter() {
   
  }

  getArticles(refresher){
    this.page= 0;
    this.articles=[];
    var art= this.cat.articles;
      for (let i = this.page; i < 10; i++) {
        this.articles.push( this.cat.articles[i] );
      }
     if(refresher != 0)
         refresher.complete();
         
  }

  getNext(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
    var art= this.cat.articles;
    this.page= this.page+1;
    var next= (this.page)*10;
      for (let i = next; i < next+10 ; i++) {
        if(i<this.cat.articles.length)
         this.articles.push( this.cat.articles[i] );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  detail(item){
  this.navCtrl.push('Article', {
    item:item
  });
}

  makelist(){
    this.mode="list";
  }

  makecard(){
    this.mode="card";
  }

}
