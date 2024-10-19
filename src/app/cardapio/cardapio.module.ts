import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioPageRoutingModule } from './cardapio-routing.module';

import { CardapioPage } from './cardapio.page';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BtnAdicionarModule } from '../shared/components/button/btn-adicionar/btn-adicionar.module';
import { CarrinhoModule } from '../shared/components/carrinho/carrinho.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioPageRoutingModule,
    BannerRusticoModule,
    HeaderModule,
    FooterModule,
    BtnAdicionarModule,
    CarrinhoModule
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
