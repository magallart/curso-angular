import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): Observable<any> | void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
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
}
