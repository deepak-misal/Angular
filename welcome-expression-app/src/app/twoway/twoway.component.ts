import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';

@Component({
  selector: 'sw-twowayserv',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
 

  constructor(private dataSvc:DataService) {
    console.log("inside constructor");
   }

  ngOnInit(): void {
    let dataServiceObservable;
    console.log("inside oninit");
    console.log(this.dataSvc.getData())
    
    dataServiceObservable=this.dataSvc.getDataAsync()
                                      .subscribe((d)=>{
                                        console.log(d)
                                        console.log("end of anonymous")
                                      })
                                      console.log("end of oinit");
  }
  

}
