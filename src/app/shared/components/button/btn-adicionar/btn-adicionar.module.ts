import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnAdicionarComponent } from './btn-adicionar.component';

@NgModule({
  declarations: [BtnAdicionarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BtnAdicionarComponent
  ]
})

export class BtnAdicionarModule { }