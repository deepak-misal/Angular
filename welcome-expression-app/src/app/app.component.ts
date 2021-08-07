import { Component } from '@angular/core';

@Component({
  selector: 'sw-welcome',
  templateUrl: './app.component.html'
})
export class AppComponent {
  msg:String

  constructor()
  {
      this.msg="Welcome to welcome component";
  }
}
