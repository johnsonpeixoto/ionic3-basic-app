import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: string;
  password: string;
  nome: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email , this.password)
      .then((data) => {
        console.log(data.uid)
        this.registraDadosPessoais(data.uid)
      })
      .catch((erro: any) => {
        console.log('erro')
      });
  }

  registraDadosPessoais(uid){
    this.firebaseDatabase.list('/usuario').push({UID: uid, nome: this.nome})
      .then((data) => {
        console.log(data)
      });

  }

}
