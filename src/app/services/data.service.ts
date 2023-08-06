import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private storage: Storage
  ) { }

  async init() {
    await this.storage.defineDriver(cordovaSQLiteDriver)
    await this.storage.create()
  }

}
