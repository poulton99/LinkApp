import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Favorite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {

  articles:any[];
  mode: String="list";
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.getFavorite();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorite');
  }

  detail(item){
  this.navCtrl.push('Article', {
    item:item
  });
}

  delete(item){
      let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete?',
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
            console.log(item);
          var articles= JSON.parse(localStorage.getItem("newsapp_favorite"));
          for(let i=0; i<articles.length; i++){
            if(item.id===articles[i].id){
              console.log(item, articles[i]);
              articles.splice(articles.indexOf(articles[i]), 1);
              this.articles= articles;
              localStorage.setItem("newsapp_favorite", JSON.stringify(articles));
            }
          }
          }
        }
      ]
    });
    confirm.present();

}

	getFavorite(){
	//find favorite in localStorage
		this.articles= JSON.parse(localStorage.getItem("newsapp_favorite"));

	}


  makelist(){
    this.mode="list";
  }

  makecard(){
    this.mode="card";
  }
}
