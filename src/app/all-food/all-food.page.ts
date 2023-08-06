import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ModalTestPage } from '../modal-test/modal-test.page';

@Component({
  selector: 'app-all-food',
  templateUrl: './all-food.page.html',
  styleUrls: ['./all-food.page.scss'],
})
export class AllFoodPage implements OnInit {
  selectedBranchAddress: string = '';
  constructor(
    private storage: Storage,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {

    this.get_branch()
  }

  ngOnInit() {
  }


  async get_branch() {
    this.selectedBranchAddress = await this.storage.get('selectedBranch')
    console.log(this.selectedBranchAddress);
    if (!this.selectedBranchAddress) {
      this.selectedBranchAddress = 'اختر الفرع'
    }
  }

  async choose_branch() {
    let modal = await this.modalCtrl.create({
      component: ModalTestPage,
      componentProps: {
        text: this.selectedBranchAddress
      }
    })
    await modal.present();

  }




}
