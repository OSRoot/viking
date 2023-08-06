import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFoodPageRoutingModule } from './all-food-routing.module';

import { AllFoodPage } from './all-food.page';
import { ModalTestPage } from '../modal-test/modal-test.page';
import { ModalTestPageModule } from '../modal-test/modal-test.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFoodPageRoutingModule,
    ModalTestPageModule
  ],
  declarations: [AllFoodPage]
})
export class AllFoodPageModule { }
