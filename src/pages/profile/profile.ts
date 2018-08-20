import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Profil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  selectedUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedUser= JSON.parse(localStorage.getItem('newsapp_user'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

}
