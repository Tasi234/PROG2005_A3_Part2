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

  startCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    }

    this.camera.getPicture(options).then((imageData) => {
     this.readText(imageData)
    }, (err) => {
     // Handle error
    }); 


  }
  readText(imageData: string) {
    this.ocr.recText(0, imageData).then((result: OCRResult) => 
      this.onSuccess(result)
      , (err) => 
      this.onFail(err)
    ); 
  }

  onSuccess(recognizedText:OCRResult) {
    alert(recognizedText);
  }
  
  onFail(message:string) {
    alert('Failed because: ' + message);
  }

}