import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrarPageRoutingModule } from './entrar-routing.module';

import { EntrarPage } from './entrar.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrarPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [EntrarPage]
})
export class EntrarPageModule {}
