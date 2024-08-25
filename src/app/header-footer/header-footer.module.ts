import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderFooterPageRoutingModule } from './header-footer-routing.module';

import { HeaderFooterPage } from './header-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderFooterPageRoutingModule
  ],
  declarations: [HeaderFooterPage]
})
export class HeaderFooterPageModule {}
