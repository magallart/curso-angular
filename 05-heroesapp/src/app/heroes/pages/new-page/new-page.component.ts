import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

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

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
      });
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} actualizado!`);
      });
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigate(['heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} creado!`);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) throw Error('Héroe requerido');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      )
      .subscribe((result) => {
        this.router.navigate(['/heroes']);
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Cerrar', { duration: 2500 });
  }
}
function tap(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}
