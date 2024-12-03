import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputimgComponent } from './inputimg.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InputimgComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InputimgComponent
  ]
})
export class InputimgModule { }
