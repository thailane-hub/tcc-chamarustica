import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerInscricaoComponent } from './banner-inscricao.component';
import { BtnAdicionarModule } from '../button/btn-adicionar/btn-adicionar.module';

@NgModule({
  declarations: [BannerInscricaoComponent],
  imports: [
    CommonModule,
    IonicModule,
    BtnAdicionarModule
  ],
  exports:[
    BannerInscricaoComponent
  ]
})

export class BannerInscricaoModule { }