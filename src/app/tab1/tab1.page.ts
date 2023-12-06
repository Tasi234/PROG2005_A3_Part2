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
    this.barcodeScanner.scan().then(barcodeData => {
    barcodeResult = barcodeData.text;
    }).catch(err => {
    alert('Error: ' + err);
    });
  }
  

  //public result:string="";
  //public connectionType:string="initialising";
  //crate any variables

  //constructor(  ) {} //private net:Network, private zbar: ZBar private barcodeScanner: BarcodeScanner
  //inject the plugin here

  // scan() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //     }).catch(err => {
  //     console.log('Error', err);
  //     });
  //   }

  //ngOnInit() {
    // let options: ZBarOptions = {
    //   flash: 'off',
    //   drawSight: false
    // }

    // this.zbar.scan(options)
    //           .then(result => {
    //             alert(result)
    //             //console.log(result); // Scanned code
    //           })
    //           .catch(err => {
    //             alert(err); // Error message
    //           });



//     let disconnect = this.net.onDisconnect()
//                             .subscribe( () => {
//                             this.connectionType="Disconnected";
//                             }, 
//                             (err) => {
//                                 alert("Disconnected" + err);
//                             });
//     let connection = this.net.onConnect()
//                             .subscribe( () => {
//                             this.connectionType="Connected";
//                             }, 
//                             (err) => {
//                                 alert("Connection Error" + err);
//                             });
// }
  }
//}
