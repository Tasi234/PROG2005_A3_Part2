//coding done by tasi unless otherwise commented

import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public emailTo:string = "";
  public emailSubject:string = "";
  public emailBody:string = "";
  public emailResult:string = "";
  //input variables

  constructor(private emailComposer: EmailComposer) {}

  sendEmail() {
    //create array store inputs
    let email = {
      to: this.emailTo,
      subject: this.emailSubject,
      body: this.emailBody
    }

  //single string to pass to the composer 
  this.emailResult = email.to + " " 
                    +email.subject + " "
                    +email.body;
  this.emailComposer.open(email);


  }
}
