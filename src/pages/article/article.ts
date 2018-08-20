import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the Article page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class Article {

art: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private sharing: SocialSharing) {
  	this.art= navParams.get('item');
  	console.log(this.art);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Article');
  }

  share(){
		 this.sharing.share("Share with", this.art.title,null/*File*/,"more info in my app")
    .then(()=>{
        let alert = this.alertCtrl.create({
  	 title: 'Success',
      subTitle: 'Share succeed!',
      buttons: ['OK']
    });
    alert.present();
      },
      ()=>{
         let alert = this.alertCtrl.create({
  	 title: 'Error',
      subTitle: 'Share Failed!',
      buttons: ['OK']
    });
    alert.present();
      })
  }

  favorite(){
let confirm = this.alertCtrl.create({
      title: 'DO you want to add to favorite?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
          confirm.present();
  	//check if favorite exist
  	var fav= JSON.parse(localStorage.getItem("newsapp_favorite"));
  	if(fav){
      var isexist= false;
      //check if the article is in favorite
      for(let i=0; i<fav.length; i++){
            if(this.art.id===fav[i].id){
              isexist= true
            }
          }
  	//if exist add article to favorite
    if(!isexist){
      fav.push(this.art);
      localStorage.setItem('newsapp_favorite', JSON.stringify(fav));
      let alert = this.alertCtrl.create({
  	 title: 'Success',
      subTitle: 'Adding succeed!',
      buttons: ['OK']
    });
    alert.present();
    }else{
      let alert = this.alertCtrl.create({
  	 title: 'Warning',
      subTitle: 'Article already exist!',
      buttons: ['OK']
    });
    alert.present();
    }
  	


  	}else{
  	//if not exist create a favorite
  	var arr= new Array();
  	arr.push(this.art);
  	localStorage.setItem('newsapp_favorite', JSON.stringify(arr));
    let alert = this.alertCtrl.create({
  	 title: 'Success',
      subTitle: 'Adding succeed!',
      buttons: ['OK']
    });
    alert.present();
  	}
          }
        }
      ]
    });
   confirm.present();
  }

}
