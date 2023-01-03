import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'miguel ángel';
  nombreUpper: string = 'MIGUEL ÁNGEL';
  nombreCompleto: string = 'mIGueL ánGEl';

  fecha: Date = new Date();
}
