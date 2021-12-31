import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
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
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email , this.password)
      .then(() => {
        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
      })
      .catch((erro: any) => {
        console.log('erro')
      });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  esqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }

}
