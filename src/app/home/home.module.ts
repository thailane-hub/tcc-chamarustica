import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BannerModule } from '../shared/components/banner/banner.module';
import { BannerRusticoModule } from '../shared/components/banner-rustico/banner-rustico.module';
import { BannerInscricaoModule } from '../shared/components/banner-inscricao/banner-inscricao.module';
import { BtnAdicionarModule } from '../shared/components/button/btn-adicionar/btn-adicionar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    BannerModule,
    BannerRusticoModule,
    BannerInscricaoModule,
    BtnAdicionarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}