import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  letrasMayusculas: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  cambiarMayusculas(): void {
    this.letrasMayusculas = !this.letrasMayusculas;
  }
}
