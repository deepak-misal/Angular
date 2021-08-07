import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { StudentComponent } from './student/student.component';
import { BlueballgameComponent } from './blueballgame/blueballgame.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindComponent,
    StudentComponent,
    BlueballgameComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [TwowayComponent]
})
export class AppModule { }
