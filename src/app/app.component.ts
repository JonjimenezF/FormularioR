import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonicStorageModule], // Asegúrate de importar IonicStorageModule aquí
  providers: [Storage] // Proporciona el servicio Storage aquí
})
export class AppComponent {
  constructor(private platform: Platform, private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();
    console.log('Storage initialized');
  }
}