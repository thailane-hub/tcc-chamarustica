import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerInscricaoComponent } from './banner-inscricao.component';



@NgModule({
  declarations: [BannerInscricaoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BannerInscricaoComponent
  ]
})
export class BannerInscricaoModule { }
