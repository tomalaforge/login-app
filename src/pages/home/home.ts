import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ContentPage} from '../content/content';
import {KeycloakProvider} from '../../providers/keycloak/keycloak';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // private auth: any = {};



  constructor(public navCtrl: NavController, private kc: KeycloakProvider,public alertCtrl: AlertController) {
  }

  authenticated(){
    return this.kc.authenticated();
  }

  login() {
    this.kc.login();
  }

  logout() {
    this.kc.logout();
  }

  pushPage() {
    this.navCtrl.push(ContentPage).then((answer) => {
      console.log(answer);
      this.kc.getToken().then((obj)=>console.log(obj))
        .catch(err=>console.log(err));
      if(!answer)
        this.kc.login();
    });
  }


}

