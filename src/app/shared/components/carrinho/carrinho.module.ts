import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { IonicModule } from '@ionic/angular';
import { BtnAdicionarModule } from '../button/btn-adicionar/btn-adicionar.module';



@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    IonicModule,
    BtnAdicionarModule,  
  ],
  exports: [
    CarrinhoComponent
  ]
})

export class CarrinhoModule { }
