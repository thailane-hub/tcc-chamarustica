import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderFooterPage } from './header-footer.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderFooterPageRoutingModule {}
