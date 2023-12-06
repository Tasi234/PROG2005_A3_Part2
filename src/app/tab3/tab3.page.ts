import { Component } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private media: Media) { }

  public resultMsg:string = '';

  public beginRecord() {
    var src = "/storage/emulated/0/Audio/recording.aac";
    var file: MediaObject = this.media.create(src);

    file.startRecord();
    alert("recording");
  }

  onSuccess() {
    this.resultMsg = "Success";
  }

  onFailure() {
    this.resultMsg = "Failure";
  }

  public playRecord() {
    var src = "/storage/emulated/0/Audio/recording.aac";
    var file: MediaObject = this.media.create(src);

    file.play();
    alert('playing');
  }

}