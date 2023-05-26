import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log('PRICE: ngOnInit');
    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PRICE: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('PRICE: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
