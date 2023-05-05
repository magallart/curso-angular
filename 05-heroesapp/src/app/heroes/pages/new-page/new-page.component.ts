import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Cómics' },
    { id: 'Marvel Comics', desc: 'Marvel - Cómics' },
  ];
}
