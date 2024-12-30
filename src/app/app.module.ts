import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
const routes: Routes = [

    // Define your routes here
  
  ];

  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      IonicModule.forRoot(),
      RouterModule.forRoot(routes),
      IonicStorageModule.forRoot(),
    ],
    providers: [
      Clipboard, // Agrega Clipboard como proveedor
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule],
  })
export class AppModule {}