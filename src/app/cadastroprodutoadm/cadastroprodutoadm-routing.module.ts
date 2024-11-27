import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroprodutoadmPage } from './cadastroprodutoadm.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroprodutoadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroprodutoadmPageRoutingModule {}
