import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@my-apps/utils';
import { CiCoreModule } from '@my-apps/web';

@NgModule({
  imports: [CiCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class CiIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CiIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CiIonicCoreModule');
  }
}
