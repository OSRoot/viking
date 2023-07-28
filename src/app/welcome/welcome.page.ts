import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  selectedBranches = [100];
  is_clicked = 0
  branches = [
    'بغداد/ القادسية-شارع سبتي- خلف مستشفى اليرموك',
    'بغداد-المنصور - شارع 14 رمضان - مجاور شميساني',
    'بغداد-العامرية - شارع المنضمة من جهة خدمي المطار',
    'بغداد - السيدية - مقابل معجنات الرباط'];
  constructor() { }

  ngOnInit() {
  }

  isClicked(index: number) {
    const i = this.selectedBranches.indexOf(index);
    if (i >= 0) {
      this.selectedBranches.splice(i, 1);
    } else {
      this.selectedBranches.push(index);
    }
  }
}
