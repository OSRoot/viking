import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFoodPageRoutingModule } from './all-food-routing.module';

import { AllFoodPage } from './all-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFoodPageRoutingModule
  ],
  declarations: [AllFoodPage]
})
export class AllFoodPageModule {}
