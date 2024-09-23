import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrenosPageRoutingModule } from './sobrenos-routing.module';

import { SobrenosPage } from './sobrenos.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrenosPageRoutingModule,
    HeaderModule,
    FooterModule,
    BannerRusticoModule
  ],
  declarations: [SobrenosPage]
})
export class SobrenosPageModule {}
