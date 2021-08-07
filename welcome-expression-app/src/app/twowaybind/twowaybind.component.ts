import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-twoway',
  templateUrl: './twowaybind.component.html'
})
export class TwowaybindComponent implements OnInit {
  firstName:String
  lastName:String

  constructor() {
      this.firstName="ABC";
      this.lastName="pqr";
   }

   updateFirstName(e:any){
     console.log(e);
     this.firstName=e;
   }

  ngOnInit(): void {
  }

}
