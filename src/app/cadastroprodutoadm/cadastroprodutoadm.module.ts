import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroprodutoadmPageRoutingModule } from './cadastroprodutoadm-routing.module';

import { CadastroprodutoadmPage } from './cadastroprodutoadm.page';
import { InputimgComponent } from '../shared/components/inputimg/inputimg.component';
import { InputimgModule } from '../shared/components/inputimg/inputimg.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroprodutoadmPageRoutingModule,
    InputimgModule
  ],
  declarations: [CadastroprodutoadmPage]
})
export class CadastroprodutoadmPageModule {}
