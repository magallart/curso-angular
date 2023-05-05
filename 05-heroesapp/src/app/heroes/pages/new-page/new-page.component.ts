import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  constructor(private heroesService: HeroesService) {}

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl(''),
    publisher: new FormControl(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Cómics' },
    { id: 'Marvel Comics', desc: 'Marvel - Cómics' },
  ];
}
