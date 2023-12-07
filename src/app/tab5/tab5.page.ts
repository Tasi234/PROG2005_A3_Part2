//coding done by tasi unless otherwise commented

import { Component } from '@angular/core';
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  constructor(private ocr: OCR, 
              private camera: Camera) { }

  public rawImage:string = '';
  //raw image value
  public recognizedText:string = 'Default Text';
  //default string

  startCamera() {
    //starts camera, captures image and saves to device
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    }

    this.camera.getPicture(options).then((imageData) => {
     this.rawImage = imageData //= this.readText(imageData)
     //passes imageData (string value) to the ocr plugin
    }, (err) => {
     alert('error')
    }); 
  }

  //Error: Type 'OCRResult' is not assignable to type 'string'.   ** this.recognizedText = result **
  //The documentation for the plugin says that the result of .recText is a string value, so idk how to troubleshoot this.

  // readText() {
  //   this.ocr.recText(0, this.rawImage).then((result) => 
  //     this.recognizedText = result
  //     , (err) => 
  //     this.onFail(err)
  //   ); 

  //   alert(this.recognizedText);
  // }
  
  onFail(message:string) {
    alert('Failed because: ' + message);
  }

}