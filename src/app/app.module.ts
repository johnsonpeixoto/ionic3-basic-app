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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBQQQy8YBTAGSfFoS8eRFi8qUX5GudItGM",
  authDomain: "ionic3-basic-app.firebaseapp.com",
  databaseURL: "https://ionic3-basic-app-default-rtdb.firebaseio.com",
  projectId: "ionic3-basic-app",
  storageBucket: "ionic3-basic-app.appspot.com",
  messagingSenderId: "50598830276",
  appId: "1:50598830276:web:c201a90887fdc6912ee991",
  measurementId: "G-CJFW6NR8LB"
};

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
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
