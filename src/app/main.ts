import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {KeycloakProvider} from '../providers/keycloak/keycloak';

// platformBrowserDynamic().bootstrapModule(AppModule);

KeycloakProvider.init({ onLoad: "check-sso",checkLoginIframe: false })
  .then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((e: string) => {
    console.log('Error in ng2 bootstrap: ' + e);
  });
