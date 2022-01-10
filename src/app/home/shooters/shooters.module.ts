import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShootersPageRoutingModule } from './shooters-routing.module';

import { ShootersPage } from './shooters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShootersPageRoutingModule
  ],
  declarations: [ShootersPage]
})
export class ShootersPageModule {}
