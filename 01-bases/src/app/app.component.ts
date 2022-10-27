import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 0;

  // sumar(): number {
  //   return this.numero++;
  // }
  // restar(): number {
  //   return this.numero--;
  // }
  operacion(valor: number): number {
    return (this.numero += valor);
  }
}
