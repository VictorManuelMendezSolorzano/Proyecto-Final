import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrategiaPageRoutingModule } from './estrategia-routing.module';

import { EstrategiaPage } from './estrategia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrategiaPageRoutingModule
  ],
  declarations: [EstrategiaPage]
})
export class EstrategiaPageModule {}
