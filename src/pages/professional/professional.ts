import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
  selectedItem: any;
  icons: string[];
  //criar model
  items: Array<{title: string, note: string, icon: string, number: string, address: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {
        icon: 'person',
        title: 'Medico 1',
        note: 'esse é o medico 1',
        number: '(85)99178-7430',
        address: 'Av Treze de Maio 1998'
      },
      {
        icon: 'person',
        title: 'Medico 2',
        note: 'esse é o medico 2',
        number: '(85)99178-7430',
        address: 'Av Treze de Maio 1998'
      },

    ];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProfessionalPage, {
      item: item
    });
  }
}
