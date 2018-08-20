import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the Profiluser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profiluser',
  templateUrl: 'profiluser.html',
})
export class Profiluser {

  pseudo: any;
  selectedUser: any;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public service: Service, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController) {
     this.pseudo= navParams.get('item');
     this.user= JSON.parse(localStorage.getItem('doctorheart_user'));
     this.selectedUser= {};
      var link = this.service.baseUrl+'user/read.php?pseudo='+this.pseudo;
        
        let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
        this.http.get(link).map(res => res.json()).subscribe(data => {
        console.log(data);
        loader.dismiss();
        this.selectedUser= data[0];
        var actu= new Date();
        this.selectedUser.age= actu.getFullYear()- this.selectedUser.annee_nais;
    }, error => {
             let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Ooops! un problème a été rencontré',
                buttons: ['OK']
              });
              alert.present();
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profiluser');
  }

  chat(id){
     var link = this.service.baseUrl+'chat/discuss.php';
        
        let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    var param= JSON.stringify({id1:this.user.id, id2: id});
        this.http.post(link, param).map(res => res.json()).subscribe(data => {
        console.log("conversation", data);
        loader.dismiss();
        this.navCtrl.push("Chat", {item: data[0]});
    }, error => {
             let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Ooops! un problème a été rencontré',
                buttons: ['OK']
              });
              alert.present();
        });
    
  }

}
