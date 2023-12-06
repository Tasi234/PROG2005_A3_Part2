import { Component } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private media: Media) { }

  public src = "/storage/emulated/0/Audio/recording.aac";
  public file: MediaObject = this.media.create(this.src);
  public resultMsg:string = '';

  public beginRecord() {

    this.file.startRecord();
    alert("recording");
  }

  public playRecord() {

    this.file.play();
    alert('playing');
  }

}