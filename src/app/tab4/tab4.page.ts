//coding done by tasi unless otherwise commented

import { Component } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor(private deviceOrientation: DeviceOrientation) { }

  public compass : number = 0;
  //rounded value
  public rawCompass : number = 0;
  //raw value from sensor
  public compassLabel : string = '';
  public labels = [
    { "heading": "N", "small": 0, "large": 15 },
    { "heading": "NNE", "small": 15, "large": 30 },
    { "heading": "NE", "small": 30, "large": 60 },
    { "heading": "ENE", "small": 60, "large": 75 },
    { "heading": "E", "small": 75, "large": 105 },
    { "heading": "ESE", "small": 105, "large": 120 },
    { "heading": "SE", "small": 120, "large": 150 },
    { "heading": "SSE", "small": 150, "large": 165 },
    { "heading": "S", "small": 165, "large": 195 },
    { "heading": "SSW", "small": 195, "large": 210 },
    { "heading": "SW", "small": 210, "large": 240 },
    { "heading": "WSW", "small": 240, "large": 255 },
    { "heading": "W", "small": 255, "large": 285 },
    { "heading": "WNW", "small": 285, "large": 300 },
    { "heading": "NW", "small": 300, "large": 330 },
    { "heading": "NNW", "small": 330, "large": 345 },
    { "heading": "N", "small": 345, "large": 360 }];
  //variables and array of labels and min/max degrees

  getHeading() {
    //show a continuously updating variable
    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => 
        this.showLabel(data.magneticHeading),
      (error: any) => alert('error')
    );
  }

  showLabel(input: number) {
    //convert value to heading per array
    this.rawCompass = input;
    this.compass = Math.round(this.rawCompass);

    for (let i of this.labels) {
          if (this.compass >= i.small && this.compass < i.large) {
            this.compassLabel = i.heading;
          }
        }
  }
}