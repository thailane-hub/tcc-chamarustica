import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BntAdicionarComponent } from './bnt-adicionar.component';



@NgModule({
  declarations: [BntAdicionarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BntAdicionarComponent
  ]
})
export class BntAdicionarModule { }
