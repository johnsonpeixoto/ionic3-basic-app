import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  map: mapboxgl.Map;
  lng: number;
  lat: number;
  marker1: mapboxgl.Marker;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.generateMap()

  }

  generateMap(){
    this.lat = -3.7175
    this.lng = -38.5473
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb25pbW8xMjMiLCJhIjoiY2tvMWtpdnN6MDBnNzJ2cnR5NzA4MWRpZSJ9.af6F9yvR7FC4W68gubnFzQ';
    // if(this.marker1){
    //   console.log("remove")
    //   this.marker1.remove()
    //   this.marker1 = null;
    //   this.map.remove()
    //   this.map = null;
    // }
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
      cordinate:[this.lng, this.lat]
    });
    this.marker1 = new mapboxgl.Marker()
    .setLngLat([this.lng, this.lat])
    .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
