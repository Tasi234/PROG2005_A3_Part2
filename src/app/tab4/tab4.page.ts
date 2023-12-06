import { Component } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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