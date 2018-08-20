import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the Forgot page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class Forgot {

   submitted: boolean= false;
  form      : FormGroup;
  user: any;
  constructor(public navCtrl: NavController, public service: Service, public navParams: NavParams, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController) {
  this.user={firstname: "", password:"", lastname:"", birthday:"", email:""};
   this.form = new FormGroup({
      email     : new FormControl('', Validators.required)
    });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }

  reset(form : FormGroup){
     this.submitted = true;
    if (this.form.valid) { // } && this.availableEmail()) {
     // let loading = this.loadingCtrl.create();
     // loading.present();
      this.navCtrl.setRoot('Login');
    } else {
      let errorMessage = "Please enter your email address."
      this.alertCtrl.create({message: errorMessage})
              .present();
    }
    }
}
