import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { CallNumber } from '@ionic-native/call-number/ngx';
import 'globalthis/auto';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(
    environment.firebaseConfig),AngularFirestoreModule,AngularFireAuthModule ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },GooglePlus,CallNumber],
  bootstrap: [AppComponent],

})
export class AppModule {}
