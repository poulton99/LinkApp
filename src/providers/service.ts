import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

	http: any;
	baseUrl: String;

  constructor(http: Http) {
    console.log('Hello Service Provider');
    this.http = http;
    //when you use an api, user baseUrl to link your app with your server
//	this.baseUrl = "http://localhost/api/";
  }

	//function for http get call
  get(link){
		return this.http.get(this.baseUrl+''+link).map(res => res.json());
	}

	//function for master-details 
  getDetails(link, val){
    return this.http.get(this.baseUrl+'/'+link+'?param='+val).map(res => res.json());
  }

	//function for http post
	doAction(link, object){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl+''+link, JSON.stringify(object));
    }


    //for our test, use this

}
