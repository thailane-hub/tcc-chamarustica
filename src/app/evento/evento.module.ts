import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';
import { BannerModule } from '../shared/components/banner/banner.module';
import { BtnAdicionarModule } from '../shared/components/button/btn-adicionar/btn-adicionar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule,
    HeaderModule,
    FooterModule,
    BannerRusticoModule,
    BannerModule,
    BtnAdicionarModule
  ],
  declarations: [EventoPage]
})
export class EventoPageModule {}
