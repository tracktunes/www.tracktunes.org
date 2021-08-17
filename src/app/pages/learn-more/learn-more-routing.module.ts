import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnMorePage } from './learn-more.page';

const routes: Routes = [
  {
    path: '',
    component: LearnMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnMorePageRoutingModule {}
