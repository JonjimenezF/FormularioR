import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonDatetime,IonTextarea, IonNote} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-r-usuario',
  templateUrl: './r-usuario.page.html',
  styleUrls: ['./r-usuario.page.scss'],
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
      IonDatetime,
      IonTextarea,
      IonNote ]
})
export class RUsuarioPage implements OnInit {

  user = {
    nombre: '',
    fecha_Ingreso: '',
    fecha_vencimiento: '',
    nTelefono: '',
    Observ: '',
    usuario: '',
    password: '',
    valorServicio: '',
    url: '',
  }
  constructor(private storage: Storage,private alertController: AlertController, private navCtrl: NavController) { 
  }

    
  async onSubmit() {
    try {
      // Validaciones de campos requeridos
      if (!this.user.nombre.trim()) {
        console.error('Error: El campo "Nombre" es obligatorio.');
        return;
      }
      if (!this.user.fecha_Ingreso) {
        console.error('Error: El campo "Fecha de Ingreso" es obligatorio.');
        return;
      }
      if (!this.user.fecha_vencimiento) {
        console.error('Error: El campo "Fecha de Vencimiento" es obligatorio.');
        return;
      }
      if (!this.user.usuario.trim()) {
        console.error('Error: El campo "Usuario" es obligatorio.');
        return;
      }
      if (!this.user.password.trim() || this.user.password === '') {
        console.error('Error: La contraseña es obligatoria');
        return;
      }

    


      // Guardar usuario si todo es válido
      this.user.url = `https://mg.contv.top/panel2/gonzalo/list.php?usuario=${this.user.usuario}&contrasena=${this.user.password}`;
      let users = await this.storage.get('users') || [];
      users.push(this.user);
      await this.storage.set('users', users);

      console.log('Usuario registrado correctamente:', this.user);
      // Mostrar alerta y redirigir al home
      await this.showSuccessAlert();

    } catch (err) {
      console.error('Error al guardar el usuario:', err);
    }
  }

  async ngOnInit() {
    await this.storage.set('test', 'value');
    console.log(await this.storage.get('test')); 
  }

  // validateDates(): boolean {
  //   const fechaIngreso = new Date(this.user.fecha_Ingreso);
  //   const fechaVencimiento = new Date(this.user.fecha_vencimiento);
  //   return fechaVencimiento >= fechaIngreso;
  // }

  // Función para mostrar la alerta
  async showSuccessAlert() {
    alert('El usuario se registró correctamente.');
  // Redirigir al home al cerrar la alerta
    this.navCtrl.navigateRoot('/home');
  }

  formatDate(): void {
    const date = new Date(this.user.fecha_vencimiento); // Convertir a objeto Date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Meses comienzan en 0
    const day = date.getDate();
  
    // Formatear como 'YYYY-M-D'
    this.user.fecha_vencimiento = `${day}-${month}-${year}`;
  }

  formatDateI(): void {
    const date = new Date(this.user.fecha_Ingreso); // Convertir a objeto Date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Meses comienzan en 0
    const day = date.getDate();
  
    // Formatear como 'YYYY-M-D'
    this.user.fecha_Ingreso = `${day}-${month}-${year}`;
  }
  

  
}
