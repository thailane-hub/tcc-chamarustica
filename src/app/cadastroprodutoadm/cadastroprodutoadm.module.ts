import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroprodutoadmPageRoutingModule } from './cadastroprodutoadm-routing.module';

import { CadastroprodutoadmPage } from './cadastroprodutoadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroprodutoadmPageRoutingModule
  ],
  declarations: [CadastroprodutoadmPage]
})
export class CadastroprodutoadmPageModule {}
