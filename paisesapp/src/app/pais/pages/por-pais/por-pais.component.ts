import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): Observable<any> | void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO (miguel): crear sugerencias
  }
}
