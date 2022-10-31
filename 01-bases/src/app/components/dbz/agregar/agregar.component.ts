import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input('personajesPadre')
  personajes: Personaje[] = [];

  @Input('nuevoPadre')
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
