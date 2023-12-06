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

  constructor(private emailComposer: EmailComposer) {}

  sendEmail() {
    let email = {
      to: this.emailTo,
      subject: this.emailSubject,
      body: this.emailBody
    }

  this.emailResult = email.to + " " 
                    +email.subject + " "
                    +email.body;
  this.emailComposer.open(email);


  }
}
