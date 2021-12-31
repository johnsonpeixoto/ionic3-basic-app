import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
  selectedItem: any;
  profs: string[];
  specialties: string[];
  icons: string[];
  items: Array<{name: string, specialty: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    alert(JSON.stringify(this.selectedItem));

    this.profs = ['João', 'Beatriz'];
    this.specialties = ['Geral', 'Pediatria'];

    this.items = [];
    for (let i = 0; i < 2; i++) {
      this.items.push({
        name: this.profs[i],
        specialty: this.specialties[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProfessionalPage, {
      item: item
    });
  }
}
