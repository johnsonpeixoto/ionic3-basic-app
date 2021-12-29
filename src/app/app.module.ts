import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { ProfessionalPage } from '../pages/professional/professional';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    EsqueciSenhaPage,
    HomePage,
    ListPage,
    ProfilePage,
    ProfessionalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    EsqueciSenhaPage,
    HomePage,
    ListPage,
    ProfilePage,
    ProfessionalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
