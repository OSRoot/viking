import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.page.html',
  styleUrls: ['./modal-test.page.scss'],
})
export class ModalTestPage implements OnInit {
  @Input() text!: string;
  clickedIndex = 0;
  selectedBranch!: string;

  branches = [
    'بغداد/ القادسية-شارع سبتي- خلف مستشفى اليرموك',
    'بغداد-المنصور - شارع 14 رمضان - مجاور شميساني',
    'بغداد-العامرية - شارع المنضمة من جهة خدمي المطار',
    'بغداد - السيدية - مقابل معجنات الرباط'];
  constructor(
    private modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalCtrl.dismiss()
  }
  branch_changed(event: any) {
    this.selectedBranch = event.target.value
    this.set_branch(this.selectedBranch)
    // this.dismiss();

  }
  set_branch(branch: any) {
    this.storage.set('selectedBranch', branch)
  }



}
