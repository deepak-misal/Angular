import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService{
    
    constructor() {
        
     }

    getData():Number{
        const random=Math.floor(Math.random()*50+1);
        return random;
    }
    getDataAsync():Observable<Number>{
        const observable =new Observable<Number>((observer)=>{
           
            const n1=Math.floor(Math.random()*10+1);
            const n2=Math.floor(Math.random()*50+1);
            observer.next(n1);
            observer.next(n2);
            observer.complete();
            
        })
        return observable;
    }
}