import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Left4dead2Page } from './left4dead2.page';

const routes: Routes = [
  {
    path: '',
    component: Left4dead2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Left4dead2PageRoutingModule {}
