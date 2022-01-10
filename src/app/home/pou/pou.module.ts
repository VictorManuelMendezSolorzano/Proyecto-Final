import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PouPageRoutingModule } from './pou-routing.module';

import { PouPage } from './pou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PouPageRoutingModule
  ],
  declarations: [PouPage]
})
export class PouPageModule {}
