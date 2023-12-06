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

  getHeading() {
    // Get the device current compass heading
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => 
      alert(data.magneticHeading),
      //alert('good'),
      (error: any) => alert('bad')
    );

    //ask about magneticHeading?
  }

  subHeading() {
    // // Watch the device compass heading change
    // var subscription = this.deviceOrientation.watchHeading().subscribe(
    //   (data: DeviceOrientationCompassHeading) => alert('data')
    // );
  }
  
  stopHeading() {
    //Stop watching heading change
    //subscription.unsubscribe();
  }
}