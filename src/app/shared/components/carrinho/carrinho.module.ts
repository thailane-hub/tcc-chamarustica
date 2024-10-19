import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    IonicModule
    
  
  ],
  exports: [
    CarrinhoComponent
  ]
})

export class CarrinhoModule { }
