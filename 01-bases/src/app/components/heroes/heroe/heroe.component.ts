import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['heroe.component.css'],
})
export class HeroeComponent {
  nombre = 'Ironman';
  edad = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} ${this.edad}`;
  }
}
