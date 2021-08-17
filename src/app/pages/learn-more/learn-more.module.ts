import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnMorePageRoutingModule } from './learn-more-routing.module';

import { LearnMorePage } from './learn-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnMorePageRoutingModule
  ],
  declarations: [LearnMorePage]
})
export class LearnMorePageModule {}
