import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  alternateName: boolean = true;

  // I18nSelect
  nombre: string = 'Miguel';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // I18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Luisa', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true; // Efecto visual al apretar el botón toggle
  }

  cambiarPersona(): void {
    if (this.alternateName) {
      this.nombre = 'Marta';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Miguel';
      this.genero = 'masculino';
    }
    this.alternateName = !this.alternateName;
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Miguel Ángel',
    edad: 37,
    direccion: 'Valencia, España',
  };

  //JSON pipe
  heroes = [
    { nombre: 'Superman', vuelva: true },
    { nombre: 'Robin', vuelva: false },
    { nombre: 'Aquaman', vuelva: false },
  ];
}
