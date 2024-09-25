import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritoPageRoutingModule } from './favorito-routing.module';

import { FavoritoPage } from './favorito.page';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';
import { BntAdicionarModule } from '../shared/components/button/bnt-adicionar/bnt-adicionar/bnt-adicionar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritoPageRoutingModule,
    FooterModule,
    HeaderModule,
    BannerRusticoModule,
    BntAdicionarModule

  ],
  declarations: [FavoritoPage]
})
export class FavoritoPageModule {}
