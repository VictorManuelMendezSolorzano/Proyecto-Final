import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstrategiaPage } from './estrategia.page';

const routes: Routes = [
  {
    path: '',
    component: EstrategiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstrategiaPageRoutingModule {}
