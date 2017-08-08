import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
// import { D3Service } from 'd3-ng2-service';
import { KeycloakService } from './app/shared/services/keycloak.service';


if (environment.production) {
  enableProdMode();
}

//  const platform = platformBrowserDynamic();
//     platform.bootstrapModule(AppModule);

KeycloakService.init()
  .then(() => {
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
  })
  .catch(() => window.location.reload());