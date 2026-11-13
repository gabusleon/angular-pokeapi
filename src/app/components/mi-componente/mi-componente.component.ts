import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  
  public nombre: string = 'Juan';
  public apellido: string = 'Pérez';
  public edad: number = 20;
  public fechaNacimiento: Date = new Date(2003, 5, 15);
  public direccion: string = 'Av. Siempre Viva 123';

  constructor() { 
    console.log('MiComponenteComponent ha sido creado');
  }

  

}
