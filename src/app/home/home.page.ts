import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  public currentLocation = {
    floor: "first Floor",
    floorid: "1",
    room: "Living Room",
    roomid: "1"
  }

  constructor(private app: AppComponent) {
    console.log(this.app.globalSiteMap)
  }

}
