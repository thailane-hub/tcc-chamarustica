import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerRusticoComponent } from './banner-rustico.component';

@NgModule({
  declarations: [BannerRusticoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BannerRusticoComponent
  ]
})

export class BannerRusticoModule { }