import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { DataService } from './services/data.service';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private data_service: DataService
  ) {
    this.data_service.init()
  }

  async splash_on() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    })
  }

}
