import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFoodPage } from './all-food.page';

const routes: Routes = [
  {
    path: '',
    component: AllFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllFoodPageRoutingModule {}
