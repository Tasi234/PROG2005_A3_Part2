import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
//copy from tab.page.ts

//link to library
//https://ionicframework.com/docs/v5/native/barcode-scanner
//https://ionicframework.com/docs/v5/native/email-composer



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    BarcodeScanner, 
    EmailComposer, 



    ],
  //add the object type to the end NOTE THE BRACKETS
  bootstrap: [AppComponent],
})
export class AppModule {}
