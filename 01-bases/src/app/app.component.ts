import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Contador App';
  numero = 0;
  base = 5;

  operacion(valor: number): number {
    return (this.numero += valor);
  }
}
