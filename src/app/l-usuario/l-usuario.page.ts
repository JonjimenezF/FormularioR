import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, 
         IonToolbar, 
         IonTitle, 
         IonContent, 
         IonList, 
         IonItem, 
         IonLabel, 
         IonText, 
         IonItemGroup, 
         IonInput,
         IonCardContent, 
         IonCardTitle, 
         IonTextarea, 
         IonCardHeader, 
         IonCard,
         IonButton
  
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  
  selector: 'app-l-usuario',
  templateUrl: './l-usuario.page.html',
  styleUrls: ['./l-usuario.page.scss'],
  providers: [Clipboard],
  standalone: true,
  imports: [
            FormsModule,
            CommonModule,
            IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonList, 
            IonItem, 
            IonLabel, 
            IonText,
            IonItemGroup,
            IonInput,
            IonCardContent,
            IonCardTitle,
            IonTextarea,
            IonCardHeader,
            IonCard,
            IonButton],
})
export class LUsuarioPage implements OnInit {
  users: any[] = [];
  constructor(private storage: Storage,private clipboard: Clipboard,private alertController: AlertController, private navCtrl: NavController) { 
    
  }

  async ngOnInit() {
    this.users = await this.storage.get('users') || [];
      
  }
  
  copyToClipboard(value: string | number | null | undefined): void {
    const textToCopy = value?.toString() || '';

    if (!textToCopy) {
      alert('No hay texto para copiar');
      return;
    }

    this.clipboard.copy(textToCopy).then(
      () => {
        console.log('Texto copiado al portapapeles:', textToCopy);
      },
      (err) => {
        console.error('Error al copiar:', err);
        alert('Error al intentar copiar');
      }
    );
  }

  // Función para eliminar el usuario
  async EliminarUsuario(nombre: string) {
    // Llamamos a la alerta y esperamos la respuesta
    const confirmed = await this.showDeleteAlert(nombre);
    console.log(confirmed);
    if (confirmed) {
      // Si el usuario confirma, eliminamos el usuario
      this.users = this.users.filter(user => user.nombre !== nombre);
      await this.storage.set('users', this.users);
      console.log(`Usuario ${nombre} eliminado`);
    } else {
      console.log(`Eliminación de usuario ${nombre} cancelada`);
    }
  }

  // Editar un usuario
  async EditarUsuario(user: any) {
       // Simulamos la edición de un usuario (por ejemplo, cambiamos su nombre)
    // const updatedUser = { ...user, nombre: user.nombre + ' - Editado' }; 
    // const index = this.users.findIndex(u => u.nombre === user.nombre);
    
    // if (index !== -1) {
    //   this.users[index] = updatedUser;
    // }
    
    // // Guardamos los cambios en el almacenamiento
    // await this.storage.set('users', this.users);
    // console.log(`Usuario ${user.nombre} actualizado`);
  }
  


  // Función para mostrar la alerta de confirmación
  showDeleteAlert(nombre: string): boolean {
    const confirmation = window.confirm(`¿Está seguro de que desea eliminar al usuario ${nombre}?`);
    
    // Verificamos si el usuario presionó "Aceptar" (true) o "Cancelar" (false)
    if (confirmation) {
      console.log('Eliminación aceptada');
    } else {
      console.log('Eliminación cancelada');
    }
  
    return confirmation; // Devuelve true si el usuario aceptó, false si lo canceló
  }
}


     