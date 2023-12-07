//coding done by tasi unless otherwise commented

import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
//import here

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public barcodeResult:string = "Scan a Barcode";

  constructor(private barcodeScanner: BarcodeScanner) { }

  scanBarcode() {
    //start camera and read in barcode to plugin function
    this.barcodeScanner.scan().then(barcodeData => {
    this.barcodeResult = barcodeData.text;
    }).catch(err => {
    alert('Error: ' + err);
    });
  }
}
