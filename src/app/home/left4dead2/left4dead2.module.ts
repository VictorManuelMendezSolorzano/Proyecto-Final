import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Left4dead2PageRoutingModule } from './left4dead2-routing.module';

import { Left4dead2Page } from './left4dead2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Left4dead2PageRoutingModule
  ],
  declarations: [Left4dead2Page]
})
export class Left4dead2PageModule {}
