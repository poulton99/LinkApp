import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the Signin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class Signin {
  submitted: boolean= false;
  form      : FormGroup;
  user: any;
  constructor(public navCtrl: NavController, public service: Service, public navParams: NavParams, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController) {
  this.user={firstname: "", lastname:"",  birthday:"", email:"", password:""};
   this.form = new FormGroup({
      email     : new FormControl('', Validators.required),
      lastname     : new FormControl('', Validators.required),
      firstname     : new FormControl('', Validators.required),
      birthday     : new FormControl('', Validators.required),
      password  : new FormControl('', Validators.required)
    });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signin');
  }

  signup(form : FormGroup){
     this.submitted = true;
    if (this.form.valid) { // } && this.availableEmail()) {
     // let loading = this.loadingCtrl.create();
     // loading.present();
      this.navCtrl.setRoot(HomePage);
      localStorage.setItem("newsapp_user", JSON.stringify(this.user));
    } else {
      let errorMessage = "Please enter all credentials."
      this.alertCtrl.create({message: errorMessage})
              .present();
    }
    }
}
