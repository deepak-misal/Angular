import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BaseCallExpression } from 'estree';
import { IBall } from './IBall';

@Component({
  selector: 'sw-blue',
  templateUrl: './blueballgame.component.html'
})
export class BlueballgameComponent implements OnInit {
  balls:IBall[];
  ball:IBall;
  blueBall:number;
  turns:number;
  isWin:boolean;
  msg:String;
  isShow:boolean;
  constructor() { 
    this.ball={
      index:1,
      color:'red'
    }
    this.balls=[];
    this.blueBall=Math.floor(Math.random()*50+1);
    this.turns=0;
    this.isWin=false;
    this.msg="";
    this.isShow=false;
    console.log(this.blueBall)
  }

  ngOnInit(): void {
  }
  createButton(){
    for(var i=0;i<50;i++){
      this.ball={index:i,color:'grey'};
      this.balls.push(this.ball);
     
    }
    return this.balls;
  }
  alert(e:IBall){
    this.turns++;
    if(e.index==this.blueBall && this.turns<6 && this.isWin==false){
        e.color="blue";
        this.isWin=true;
        this.msg="You Won The Game!!"
    }
    else if(e.index<this.blueBall && this.turns<6 && this.isWin==false){
      e.color="red";
      this.msg="number of turns left ="+(5-this.turns);
    }else if(e.index>this.blueBall && this.turns<6 && this.isWin==false){
      e.color="green";
      this.msg="number of turns left ="+(5-this.turns);
    }
    if(this.isWin==true || this.turns==5){
      this.isShow=true;
    }
    return e.color;
    
  }
  playAgain(){
    
    window.location.reload();
  }

}
