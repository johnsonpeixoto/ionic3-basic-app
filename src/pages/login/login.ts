import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { EsqueciSenhaPage } from '../recovery/esqueci-senha';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  email: string;
  password: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabaseModule) {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email , this.password)
      .then((data) => {
        console.log(data.uid)
        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
      })
      .catch((erro: any) => {
        alert('E-mail/Senha incorretos')
      });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  esqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }

}
