import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ServicesModule } from './services/services.module';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		ServicesModule,
		BrowserModule, 
		IonicModule.forRoot(), 
		AppRoutingModule,     
		AngularFireModule.initializeApp(environment.firebase), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	],
	providers: [
	StatusBar,
	SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
