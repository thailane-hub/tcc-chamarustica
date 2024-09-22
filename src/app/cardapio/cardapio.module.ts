import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioPageRoutingModule } from './cardapio-routing.module';

import { CardapioPage } from './cardapio.page';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioPageRoutingModule,
    BannerRusticoModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
