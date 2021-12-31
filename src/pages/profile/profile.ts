import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  name: string;
  email: string;
  phone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event) {
    console.log(event);
    alert(`${this.name} \n${this.email} \n${this.phone}`);
  }
}
