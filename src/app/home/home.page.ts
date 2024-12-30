import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonDatetime} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonDatetime ]
})
export class HomePage {

  

  constructor(private router: Router) {}

  async ngOnInit() {
    
  }
  async AgregarUsuario() {
      this.router.navigate(['/r-usuario']);
    }

  async ListarUsuario() {
      this.router.navigate(['/l-usuario']);
  }

  }

