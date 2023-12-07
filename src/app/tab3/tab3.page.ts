//coding done by tasi unless otherwise commented

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
  //variables

  beginRecord() {
    this.file.startRecord();
  }

  endRecord() {
    this.file.stopRecord();
    this.file.release();
    //release the media instance
  }

  playRecord() {
    this.file.play();
  }

}