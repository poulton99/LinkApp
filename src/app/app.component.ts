import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Categories } from '../providers/category';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  user: any;
  categories: any;
  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public category: Categories) {
    this.initializeApp();

    //test if user was logged in before
 this.user= JSON.parse(localStorage.getItem('newsapp_user'));
      if(this.user){
        //if user was logged in call the home page
        this.rootPage = HomePage;
      }else{
        //else call login page
        this.rootPage = 'Login';
      }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: 'Profile' },
      { title: 'Favorite', component: 'Favorite' },
    ];

    this.categories= this.category.categories;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openCategory(cat){
    // Open 
    this.nav.setRoot('Category', {item: cat});
  }

  logout(){
    localStorage.removeItem('newsapp_user');
    this.nav.setRoot('Login');
  }
}
