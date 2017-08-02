import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {KeycloakProvider} from '../../providers/keycloak/keycloak';
import {KeycloakProfile} from 'keycloak-js';

/**
 * Generated class for the ContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage implements OnInit{
  ngOnInit(): void {
    // this.kc.loadProfile()
    //   .success((profile)=>this.auth=profile)
    //   .error(()=>this.auth=null);
  }

  private auth: KeycloakProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private kc:KeycloakProvider) {
  }

  ionViewCanEnter() {
    console.log("je suis la");
    return this.kc.authenticated();
  }

}
