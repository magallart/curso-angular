import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino = '';
  hayError = false;

  constructor(private paisService: PaisService) {}

  buscar(): Observable<any> | void {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
