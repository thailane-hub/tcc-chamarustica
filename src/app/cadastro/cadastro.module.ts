import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CadastroPageRoutingModule } from './cadastro-routing.module';
import { CadastroPage } from './cadastro.page';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { BtnAdicionarModule } from '../shared/components/button/btn-adicionar/btn-adicionar.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    FooterModule,
    HeaderModule,
    BtnAdicionarModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}