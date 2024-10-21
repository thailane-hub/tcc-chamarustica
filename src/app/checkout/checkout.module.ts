import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckoutPageRoutingModule } from './checkout-routing.module';
import { CheckoutPage } from './checkout.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BtnAdicionarModule } from '../shared/components/button/btn-adicionar/btn-adicionar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule,
    HeaderModule,
    FooterModule,
    BtnAdicionarModule
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}