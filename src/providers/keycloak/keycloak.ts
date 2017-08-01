import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {KeycloakInstance} from 'keycloak-js';

/*
 Generated class for the KeycloakProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */


const Keycloak = require('keycloak-js');

@Injectable()
export class KeycloakProvider {
  static keycloakAuth: KeycloakInstance = Keycloak("assets/keycloak.json");

  static init(options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      KeycloakProvider.keycloakAuth.init(options)
        .success(() => {
          resolve();
        })
        .error((errorData: any) => {
          reject(errorData);
        });
    });
  }

  authenticated(): boolean {
    return KeycloakProvider.keycloakAuth.authenticated;
  }


  login() {
    KeycloakProvider.keycloakAuth.login();
  }

  logout() {
    KeycloakProvider.keycloakAuth.logout();
  }

  account() {
    KeycloakProvider.keycloakAuth.accountManagement();
  }

  loadProfile() {
    return KeycloakProvider.keycloakAuth.loadUserProfile();
  }


  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakProvider.keycloakAuth.token) {
        KeycloakProvider.keycloakAuth
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakProvider.keycloakAuth.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}
