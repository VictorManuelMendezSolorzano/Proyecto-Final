import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PouPage } from './pou.page';

const routes: Routes = [
  {
    path: '',
    component: PouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PouPageRoutingModule {}
