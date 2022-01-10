import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShootersPage } from './shooters.page';

const routes: Routes = [
  {
    path: '',
    component: ShootersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShootersPageRoutingModule {}
