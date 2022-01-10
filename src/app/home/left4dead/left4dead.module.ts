import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Left4deadPageRoutingModule } from './left4dead-routing.module';

import { Left4deadPage } from './left4dead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Left4deadPageRoutingModule
  ],
  declarations: [Left4deadPage]
})
export class Left4deadPageModule {}
