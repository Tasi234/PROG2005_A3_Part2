import { Component } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private media: Media) { }
  public src = "recording.aac";
  public resultMsg:string = '';
  public file: MediaObject = this.media.create(this.src);
  public count: number = 0;

  public beginRecord() {
    if (this.count = 0) {
      this.file.startRecord();
      this.count++;
    } else {
      alert("Only 1 recording allowed");
    }
  }

  public endRecord() {
    this.file.stopRecord();
    this.file.release();
  }

  public playRecord() {
    this.file.play();
  }

}