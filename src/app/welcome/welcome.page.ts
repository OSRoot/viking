import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { LoadingController, NavController, isPlatform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  selectedBranchAddress!: string;
  @Output() branchAddressSelected = new EventEmitter<string>();
  selectedBranch!: string;
  clickedIndex = 0;

  // branche!: any
  branches = [
    'بغداد/ القادسية-شارع سبتي- خلف مستشفى اليرموك',
    'بغداد-المنصور - شارع 14 رمضان - مجاور شميساني',
    'بغداد-العامرية - شارع المنضمة من جهة خدمي المطار',
    'بغداد - السيدية - مقابل معجنات الرباط'];
  constructor(
    private router: Router,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController

  ) { }


  ngOnInit() {
    this.ionViewWillEnter()
  }

  ionViewWillEnter() {
    if (!isPlatform('mobile')) {
      StatusBar.setStyle({ style: StatusBarStyle.Light })
      StatusBar.setOverlaysWebView({ overlay: false })
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }
  }

  change_status() {

  }
  branch_changed(event: any) {
    this.selectedBranch = event.target.value
    this.set_branch(this.selectedBranch)

  }
  set_branch(branch: any) {
    this.storage.set('selectedBranch', branch)
  }



  async show_loader() {
    let loader = await this.loadingCtrl.create({
      message: 'Loading',
      duration: 1500
    });
    await loader.present()
  }

  navigate() {

    this.navCtrl.navigateForward('all-food')
  }
}
