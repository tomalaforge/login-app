import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContentPage} from '../content/content';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private keycloak;
  private auth: any = {};

  constructor(public navCtrl: NavController) {
    this.keycloak = Keycloak("assets/keycloak.json");
    this.keycloak.init()
      .success(() => {
        alert(this.keycloak.authenticated?"authenticated":"not authenticated");
        // this.auth.authenticated = true;
        // this.auth.authz = this.keycloak;
        // this.auth.logoutUrl = `${this.keycloak.authServerUrl}/realms/${this.keycloak.realm}/protocol/openid-connect/logout?redirect_uri=/`;
      })
      .error(()=>alert("error"));
  }

  login() {
    this.keycloak.login();
  }

  logout(){
    this.auth.loggedIn = false;
    this.auth.authz = null;
    window.location.href = this.auth.logoutUrl;
  }

  pushPage() {
    this.navCtrl.push(ContentPage);
  }


}

