import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // public menuItem = [
  //   {title: "Test1", url: "/test1", icon: "list"},
  //   {title: "Test2", url: "/test2", icon: "add"},
  //   {title: "Test3", url: "/test3", icon: "trash"}
  // ];

  
  public globalSiteMap = [
    {
      floor: "First Floor",
      floorid: "1",
      rooms: [
        {name: "Living Room", id: "1"},
        {name: "Guest Room", id: "2"},
        {name: "Ante Room", id: "3"},
        {name: "Main Living Room", id: "4"}
      ]
    },
    {
      floor: "Second Floor",
      floorid: "2",
      rooms: [
        {name: "Family Lounge", id: "5"},
        {name: "Master's Bed", id: "6"},
        {name: "Madam's Bedroom", id: "7"},
        {name: "Children", id: "8"}
      ]
    },
    {
      floor: "Third Floor",
      floorid: "3",
      rooms: [
        {name: "Gym", id: "9"},
        {name: "Lookout", id: "10"}
      ]
    },
  {
    floor: "Basement",
    floorid: "4",
    rooms: [
      {name: "Cinema Room", id: "11"},
      {name: "Garage", id: "12"},
      {name: "Rest Room", id: "13"},
      {name: "Pool Area", id: "14"}
    ]
  }
];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
